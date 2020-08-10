const { resolve } = require('path')
const { promisify } = require('util')
const { readdirSync, lstatSync, unlinkSync, existsSync } = require('fs')
const {
  docs,
  source,
  root
} = require('../../config/build-time')

module.exports = promisify(function unlinkFiles () {
  const pathsToUnlink = [docs.pages.destiny, source, root.own]

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
})
