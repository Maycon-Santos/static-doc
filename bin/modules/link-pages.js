const { resolve } = require('path')
const { symlinkSync, readdirSync, existsSync } = require('fs')

const {
  docs,
  source,
  ignorePathsToSymlink,
  pathsSymlinkToSource
} = require('../../config/build-time')

module.exports = function linkFiles () {
  const originFiles = readdirSync(docs.pages.origin)

  const link = filename => {
    if (ignorePathsToSymlink.test(filename)) {
      return
    }

    const originFile = resolve(docs.pages.origin, filename)
    const destinyFile = pathsSymlinkToSource.test(filename)
      ? resolve(source, filename)
      : resolve(docs.pages.destiny, filename)

    if (!existsSync(destinyFile)) {
      symlinkSync(originFile, destinyFile)
    }
  }

  originFiles.forEach(link)
}
