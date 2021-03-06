const { resolve } = require('path')
const { execSync } = require('child_process')
const rmRecursive = require('../../utils/rm-recursive')
const { OWN_ROOT_PATH } = require('../../constants')

module.exports = function deleteIgnoredFiles () {
  const stdout = execSync(
    'git ls-files . --ignored --exclude-standard --others',
    { maxBuffer: Infinity }
  )
  const pathsString = stdout.toString()
  const paths = pathsString.split(/\n/g)

  paths.forEach(path => {
    if (/^node_modules/.test(path) || !path) {
      return
    }

    rmRecursive(resolve(OWN_ROOT_PATH, path))
  })
}
