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
  isDev
} = require('../../config/build-time')

const nextJsConfig = require('../../next.config')

module.exports = function startServer () {
  const app = next({
    dev: isDev,
    dir: rootPath,
    conf: nextJsConfig
  })

  const handle = app.getRequestHandler()

  app.prepare().then(() => {
    const server = createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      const routeKeys = ['pathname', 'path', 'href']

      routeKeys.forEach(key => {
        const route = parsedUrl[key]
        if (route.length > 1) {
          if (/\/$/.test(route)) {
            parsedUrl[key] = route.replace(/\/$/, '')
          }
        }
      })

      handle(req, res, parsedUrl)
    })

    server.listen(argv.port, err => {
      if (err) throw err
      console.log(`> Ready on localhost:${argv.port}`)
    })
  })
}
