const deleteNextJsBuilds = require('./delete-nextjs-builds')
const unlinkFiles = require('./unlink-files')

module.exports = function clear () {
  deleteNextJsBuilds()
  unlinkFiles()
}
