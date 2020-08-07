const { argv } = require('yargs')
const { devBuildPath, buildPath } = require('../../config/build-time')
const rmRecursive = require('../../utils/rm-recursive')
const command = argv._[0]

module.exports = function deleteNextJsBuilds () {
  const cachePath = ['dev', 'clear'].includes(command) ? devBuildPath : buildPath
  rmRecursive(cachePath)
}
