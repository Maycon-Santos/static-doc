const { resolve } = require('path')
const { readdirSync, lstatSync, unlinkSync, existsSync } = require('fs')
const { docs, root } = require('../../config')

module.exports = function unlinkFiles () {
  const pathsToUnlink = [docs.pages.destiny, root.own]

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
