const { resolve } = require('path')
const { spawnSync } = require('child_process')
const { argv } = require('yargs')
const { renameSync, symlinkSync, existsSync } = require('fs')

const {
  root,
  docs,
  build,
  nextBin,
  out,
  userBuildDirDefault,
  userBuildStaticDirDefault
} = require('../../config/build-time')

const rmRecursive = require('../../utils/rm-recursive')
const userConfig = require('./user-config')

/**
 * Resolves `next build` cli opitons.
 */
function resolveNextJsBuildArgs () {
  return [nextBin, 'build']
}

/**
 * Resolves `next export` cli opitons.
 */
function resolveNextJsExportArgs () {
  return [nextBin, 'export', '-o', out.path]
}

/**
 * Build files with `next` cli
 */
module.exports = function () {
  const command = argv._[0]
  const nextJsBuildArgs = resolveNextJsBuildArgs()
  const nextJsExportArgs = resolveNextJsExportArgs()
  const isStaticFiles = command === 'build:static'
  const outFiles = isStaticFiles ? out.path : build.prod.path

  const spawnConfig = {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      cwd: root.own,
      NODE_ENV: 'production',
      config: JSON.stringify(userConfig)
    }
  }

  const distDir =
    isStaticFiles
      ? userConfig.buildStaticDir || userBuildStaticDirDefault
      : userConfig.buildDir || userBuildDirDefault
  const distPath = resolve(docs.root, `../${distDir}`)

  if (existsSync(distPath)) {
    rmRecursive(outFiles)
  }

  if (existsSync(distPath)) {
    rmRecursive(distPath)
  }

  spawnSync('node', nextJsBuildArgs, spawnConfig)

  if (isStaticFiles) {
    spawnSync('node', nextJsExportArgs, spawnConfig)
  }

  renameSync(outFiles, distPath)
  symlinkSync(distPath, outFiles)

  console.log('\n', '\x1b[30m\x1b[42m', 'Done! ')
}
