const { spawnSync } = require('child_process')
const { createServer } = require('http')
// eslint-disable-next-line
const { parse } = require('url')
const next = require('next')
const { argv } = require('yargs')
const { OWN_ROOT_PATH } = require('../../constants')

const command = argv._[0]
const isDev = command === 'dev'

module.exports = function startServer () {
  const nextConfig = require('../../next.config')

  const app = next({
    dev: isDev,
    dir: OWN_ROOT_PATH,
    conf: nextConfig
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
      console.log(`> Ready on http://localhost:${argv.port}`)
    })
  })
}
