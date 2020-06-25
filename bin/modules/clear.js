const clearNextJsCache = require('./clear-nextjs-cache')
const unlinkFiles = require('./unlink-files')

module.exports = function clear () {
  clearNextJsCache()
  unlinkFiles()
}
