const { resolve } = require('path')
const { symlinkSync, readdirSync } = require('fs')

const { DOCS_PAGES_ORIGIN_PATH, DOCS_PAGES_DESTINY_PATH } = require('../../constants')

module.exports = function linkFiles () {
  const originPages = readdirSync(DOCS_PAGES_ORIGIN_PATH)

  originPages.forEach(filename => {
    const origin = resolve(DOCS_PAGES_ORIGIN_PATH, filename)
    const destiny = resolve(DOCS_PAGES_DESTINY_PATH, filename)
    symlinkSync(origin, destiny)
  })
}
