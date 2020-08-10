const { resolve } = require('path')
const { promisify } = require('util')
const { exec } = require('child_process')
const rmRecursive = require('../../utils/rm-recursive')
const { root } = require('../../config/build-time')

module.exports = promisify(function deleteIgnoredFiles (done) {
  return exec('git ls-files . --ignored --exclude-standard --others', { maxBuffer: Infinity }, (error, stdout) => {
    if (error) {
      throw new Error(error)
    }

    const paths = stdout.split(/\n/g)

    paths.forEach(path => {
      if (/^node_modules/.test(path) || !path) {
        return
      }

      rmRecursive(resolve(root.own, path))
    })

    done()
  })
})
