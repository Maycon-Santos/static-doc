const {
  resolve
} = require('path')

const {
  execSync
} = require('child_process')

const {
  sourcePath,
  devPath,
  buildPath
} = require('../../config/build-time')

module.exports = function clearNextJsCache (command) {
  const cachePath = command === 'dev' ? devPath : buildPath

  if (process.platform === 'win32') {
    execSync(`del /f /s ${cachePath}`)
  } else {
    execSync(`rm -rf ${cachePath}`)
  }
}
