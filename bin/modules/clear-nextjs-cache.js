const { resolve } = require('path')

const { argv } = require('yargs')

const { sourcePath, devPath, buildPath } = require('../../config/build-time')

const rmRecursive = require('./rm-recursive')

const command = argv._[0]

module.exports = function clearNextJsCache () {
  const cachePath = ['dev', 'clear'].includes(command) ? devPath : buildPath
  rmRecursive(cachePath)
}
