const { execSync } = require('child_process')
const { resolve } = require('path')

module.exports = function rmRecursive (path) {
  if (process.platform === 'win32') {
    execSync(`del /f /s ${path}`)
  } else {
    execSync(`rm -rf ${path}`)
  }
}
