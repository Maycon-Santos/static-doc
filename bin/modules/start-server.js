const {
  resolve
} = require('path')

const {
  createServer
} = require('http')

const next = require('next')

const {
  spawn
} = require('child_process')

const {
  argv
} = require('yargs')

const {
  rootPath,
  originPagesDir,
  nextBinPath,
  buildPath,
  devPath
} = require('../../config/build-time')

const nextJsConfig = require('./nextjs-config')
const dev = process.env.NODE_ENV !== 'production'
const command = argv._[0]

module.exports = function startServer () {
  const app = next({
    dev,
    dir: rootPath,
    conf: nextJsConfig
  })

  const handle = app.getRequestHandler()

  app.prepare().then(() => {
    createServer((req, res) => handle(req, res, new URL(req.url, true)))
      .listen(argv.port, (err) => {
        if (err) throw err
      })
  })
}
