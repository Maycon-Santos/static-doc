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
  execSync
} = require('child_process')

const {
  argv
} = require('yargs')

const {
  docsDestinyPath,
  sourcePath,
  assetsDestinyPath
} = require('../../config/build-time')

module.exports = function unlinkFiles () {
  const command = argv._[0]
  const pathsToUnlink = [docsDestinyPath, sourcePath, assetsDestinyPath]

  pathsToUnlink.forEach(dir => {
    if (!existsSync(dir)) return

    const filenames = readdirSync(dir)

    filenames.forEach(filename => {
      const path = resolve(dir, filename)
      const fileLstat = lstatSync(path)
      if (fileLstat.isSymbolicLink() && existsSync(path)) {
        unlinkSync(path)

        if (command === 'clear') {
          execSync(`git add ${path}`)
        }
      }
    })
  })
}
