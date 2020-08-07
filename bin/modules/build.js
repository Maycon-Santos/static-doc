const { resolve } = require('path')
const { spawnSync } = require('child_process')
const { argv } = require('yargs')
const { renameSync, symlinkSync, existsSync } = require('fs')

const {
  rootPath,
  docsOriginPath,
  buildPath,
  nextBinPath,
  outPath,
  userBuildDirDefault,
  userBuildStaticDirDefault
} = require('../../config/build-time')

const rmRecursive = require('../../utils/rm-recursive')
const loadUserConfig = require('./load-user-config')

/**
 * Resolves `next build` cli opitons.
 */
function resolveNextJsBuildArgs () {
  return [nextBinPath, 'build']
}

/**
 * Resolves `next export` cli opitons.
 */
function resolveNextJsExportArgs () {
  return [nextBinPath, 'export', '-o', outPath]
}

/**
 * Build files with `next` cli
 */
module.exports = function build () {
  const command = argv._[0]
  const nextJsBuildArgs = resolveNextJsBuildArgs()
  const nextJsExportArgs = resolveNextJsExportArgs()
  const userConfig = loadUserConfig()
  const isStaticFiles = command === 'build:static'
  const outFiles = isStaticFiles ? outPath : buildPath

  const spawnConfig = {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      cwd: rootPath,
      NODE_ENV: 'production',
      config: JSON.stringify(userConfig)
    }
  }

  const distDir =
    isStaticFiles
      ? userConfig.buildStaticDir || userBuildStaticDirDefault
      : userConfig.buildDir || userBuildDirDefault
  const distPath = resolve(docsOriginPath, `../${distDir}`)

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
