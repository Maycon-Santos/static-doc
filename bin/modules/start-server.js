const {
  resolve
} = require('path')

const {
  spawn
} = require('child_process')

const {
  sourcePath,
  originPagesDir
} = require('../../config/build-time')

const loadUserConfig = require('./load-user-config')

const {
  argv
} = require('yargs')

function resolveNextJsArgs () {
  const nextBin = resolve(__dirname, '../../node_modules/.bin/next')

  return [
    nextBin,
    argv._[0],
    sourcePath,
    `--port ${argv.port}`
  ]
}

module.exports = function startServer () {
  const nextJsArgs = resolveNextJsArgs(argv)
  const userConfig = loadUserConfig()

  spawn('node', nextJsArgs, {
    cwd: resolve(sourcePath, '..'),
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      config: JSON.stringify(userConfig)
    }
  })
}
