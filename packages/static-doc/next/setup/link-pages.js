const { resolve } = require('path')
const { symlinkSync, readdirSync } = require('fs')

const { docs } = require('../../config')

module.exports = function linkFiles () {
  const originPages = readdirSync(docs.pages.origin)

  originPages.forEach(filename => {
    const origin = resolve(docs.pages.origin, filename)
    const destiny = resolve(docs.pages.destiny, filename)
    symlinkSync(origin, destiny)
  })
}
