const {
  resolve
} = require('path')

const {
  sourcePath,
  devPath,
  buildPath
} = require('../../config/build-time')

const rmRecursive = require('./rm-recursive')

module.exports = function clearNextJsCache (command) {
  const cachePath = command === 'dev' ? devPath : buildPath
  rmRecursive(cachePath)
}
