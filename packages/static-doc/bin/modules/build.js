const { resolve } = require('path')
const { spawnSync } = require('child_process')
const { argv } = require('yargs')
const { renameSync, symlinkSync, existsSync } = require('fs')

const {
  root,
  docs,
  build,
  out,
  userBuildDirDefault,
  userBuildStaticDirDefault
} = require('../../config')

const rmRecursive = require('../../utils/rm-recursive')
const userConfig = require('./user-config')

const nextBin = require.resolve('.bin/next')

/**
 * Resolves `next build` cli opitons.
 */
function resolveNextJsBuildArgs () {
  return [nextBin, 'build', root.own]
}

/**
 * Resolves `next export` cli opitons.
 */
function resolveNextJsExportArgs () {
  return [nextBin, 'export', root.own, '-o', out.path]
}

/**
 * Build files with `next` cli
 */
module.exports = function () {
  const command = argv._[0]
  const nextJsBuildArgs = resolveNextJsBuildArgs()
  const nextJsExportArgs = resolveNextJsExportArgs()
  const generateStaticFiles = command === 'build:static'

  const spawnConfig = {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      dir: argv.dir,
      NODE_ENV: 'production'
    }
  }

  const distDir =
    generateStaticFiles
      ? userConfig.buildStaticDir || userBuildStaticDirDefault
      : userConfig.buildDir || userBuildDirDefault
  const distPath = resolve(docs.root, `../${distDir}`)

  const outFiles = generateStaticFiles ? out.path : build.prod.path

  if (existsSync(distPath)) {
    rmRecursive(outFiles)
  }

  if (existsSync(distPath)) {
    rmRecursive(distPath)
  }

  spawnSync('node', nextJsBuildArgs, spawnConfig)

  if (generateStaticFiles) {
    spawnSync('node', nextJsExportArgs, spawnConfig)
  }

  renameSync(outFiles, distPath)
  symlinkSync(distPath, outFiles)

  console.log('\n', '\x1b[30m\x1b[42m', 'Done!', '\x1b[0m', '\n')
}
