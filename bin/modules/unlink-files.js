const {
  resolve
} = require('path')

const {
  readdirSync,
  lstatSync,
  unlinkSync,
  existsSync
} = require('fs')

const {
  docsDestinyPath,
  sourcePath,
  assetsDestinyPath
} = require('../../config/build-time')

module.exports = function unlinkFiles () {
  [docsDestinyPath, sourcePath, assetsDestinyPath].forEach(dir => {
    if (!existsSync(dir)) return

    const filenames = readdirSync(dir)

    filenames.forEach(filename => {
      const path = resolve(dir, filename)
      const fileLstat = lstatSync(path)
      if (fileLstat.isSymbolicLink()) {
        unlinkSync(path)
      }
    })
  })
}
