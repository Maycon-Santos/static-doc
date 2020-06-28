const { resolve } = require('path')

const { symlinkSync, readdirSync, existsSync } = require('fs')

const {
  docsOriginPath,
  docsDestinyPath,
  sourcePath,
  ignorePathsToSymlink,
  pathsSymlinkToSource
} = require('../../config/build-time')

module.exports = function linkFiles () {
  const originFiles = readdirSync(docsOriginPath)

  const link = filename => {
    if (ignorePathsToSymlink.test(filename)) {
      return
    }

    const originFile = resolve(docsOriginPath, filename)
    const destinyFile = pathsSymlinkToSource.test(filename)
      ? resolve(sourcePath, filename)
      : resolve(docsDestinyPath, filename)

    if (!existsSync(destinyFile)) {
      symlinkSync(originFile, destinyFile)
    }
  }

  originFiles.forEach(link)
}
