const { resolve } = require('path')

const { createServer } = require('http')

const {
  // eslint-disable-next-line
  parse
} = require('url')

const next = require('next')

const { spawn } = require('child_process')

const { argv } = require('yargs')

const {
  rootPath,
  originPagesDir,
  nextBinPath,
  buildPath,
  devPath,
  isDev
} = require('../../config/build-time')

const nextJsConfig = require('../../next.config')
const command = argv._[0]

module.exports = function startServer () {
  const app = next({
    dev: isDev,
    dir: rootPath,
    conf: nextJsConfig
  })

  const handle = app.getRequestHandler()

  app.prepare().then(() => {
    const server = createServer((req, res) => {
      handle(req, res, parse(req.url, true))
    })

    server.listen(argv.port, err => {
      if (err) throw err
      console.log(`> Ready on localhost:${argv.port}`)
    })
  })
}
