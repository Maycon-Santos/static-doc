const {
  resolve
} = require('path')

const {
  spawn
} = require('child_process')

const {
  argv
} = require('yargs')

const {
  sourcePath,
  originPagesDir,
  nextBinPath
} = require('../../config/build-time')

const loadUserConfig = require('./load-user-config')

const command = argv._[0]

function resolveNextJsArgs () {
  return [
    nextBinPath,
    command,
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
      NODE_ENV: command === 'start' ? 'production' : 'development',
      config: JSON.stringify(userConfig)
    }
  })
}
