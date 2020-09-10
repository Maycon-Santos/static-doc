const { spawnSync } = require('child_process')
const { argv } = require('yargs')
const { root } = require('../../config')
const userConfig = require('../../data/user-config')
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
  return [nextBin, 'export', root.own, '-o', userConfig.outDir]
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
      argv: JSON.stringify(argv),
      NODE_ENV: 'production'
    }
  }

  spawnSync('node', nextJsBuildArgs, spawnConfig)

  if (generateStaticFiles) {
    spawnSync('node', nextJsExportArgs, spawnConfig)
  }

  console.log('\n', '\x1b[30m\x1b[42m', 'Done!', '\x1b[0m', '\n')
}
