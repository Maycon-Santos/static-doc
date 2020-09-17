const { spawnSync } = require('child_process')
const { argv } = require('yargs')
const { OWN_ROOT_PATH } = require('../../constants')
const userConfig = require('../../data/user-config')
const nextBin = require.resolve('.bin/next')

/**
 * Resolves `next build` cli opitons.
 */
function resolveNextJsBuildArgs () {
  return [nextBin, 'build', OWN_ROOT_PATH]
}

/**
 * Resolves `next export` cli opitons.
 */
function resolveNextJsExportArgs () {
  return [nextBin, 'export', OWN_ROOT_PATH, '-o', userConfig.outDir]
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
      STATIC_DOCS_DIR: argv.dir,
      NODE_ENV: 'production'
    }
  }

  spawnSync('node', nextJsBuildArgs, spawnConfig)

  if (generateStaticFiles) {
    spawnSync('node', nextJsExportArgs, spawnConfig)
  }

  console.log('\n', '\x1b[30m\x1b[42m', 'Done!', '\x1b[0m', '\n')
}
