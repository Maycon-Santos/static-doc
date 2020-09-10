const pipe = require('../../utils/pipe')
const unlinkFiles = require('./unlink-files')
const linkPages = require('./link-pages')
const linkPublicDir = require('./link-public-dir')

const warmup = pipe(
  unlinkFiles,
  linkPages,
  linkPublicDir
)

module.exports = warmup
