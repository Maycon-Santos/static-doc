const { resolve, join } = require('path')

const { readdirSync, readFileSync } = require('fs')

module.exports = function deepReaddir (baseDir) {
  const filenames = readdirSync(baseDir)

  function getSubPaths (dir) {
    return filename => {
      try {
        const subPathFiles = readdirSync(resolve(dir, filename))

        filenames.splice(filenames.indexOf(filename), 1)

        subPathFiles.forEach(subpathFile => {
          filenames.push(join(filename, subpathFile))
        })

        subPathFiles.forEach(getSubPaths(join(dir, filename)))
      } catch (e) {}
    }
  }

  filenames.forEach(getSubPaths(baseDir))

  return filenames
}
