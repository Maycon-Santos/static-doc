const pipe = require('../../utils/pipe')
const unlinkFiles = require('./unlink-files')
const linkPages = require('./link-pages')
const linkPublicDir = require('./link-public-dir')

module.exports = function setup () {
  const run = pipe(unlinkFiles, linkPages, linkPublicDir)

  run()
}
