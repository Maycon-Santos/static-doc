const { resolve } = require('path')
const { readdirSync, lstatSync, unlinkSync, existsSync } = require('fs')
const { DOCS_PAGES_DESTINY_PATH, OWN_ROOT_PATH } = require('../../constants')

module.exports = function unlinkFiles () {
  const pathsToUnlink = [DOCS_PAGES_DESTINY_PATH, OWN_ROOT_PATH]

  pathsToUnlink.forEach(dir => {
    if (!existsSync(dir)) return

    const filenames = readdirSync(dir)

    filenames.forEach(filename => {
      const path = resolve(dir, filename)
      const fileLstat = lstatSync(path)
      if (fileLstat.isSymbolicLink() && existsSync(path)) {
        unlinkSync(path)
      }
    })
  })
}
