const { resolve } = require('path')
const { readdirSync, lstatSync, unlinkSync, existsSync } = require('fs')
const {
  docsDestinyPath,
  sourcePath,
  assetsDestinyPath,
  rootPath
} = require('../../config/build-time')

module.exports = function unlinkFiles () {
  const pathsToUnlink = [docsDestinyPath, sourcePath, assetsDestinyPath, rootPath]

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
