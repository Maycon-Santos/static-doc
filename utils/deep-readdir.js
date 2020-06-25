const {
  resolve,
  join
} = require('path')

const {
  readdirSync,
  readFileSync
} = require('fs')

module.exports = function deepReaddir (baseDir) {
  const filenames = readdirSync(baseDir)

  function getSubpaths (dir) {
    return (filename) => {
      try {
        const subpathFiles = readdirSync(resolve(dir, filename))

        filenames.splice(filenames.indexOf(filename), 1)

        subpathFiles.forEach(subpathFile => {
          filenames.push(join(filename, subpathFile))
        })

        subpathFiles.forEach(getSubpaths(join(dir, filename)))
      } catch (e) {}
    }
  }

  filenames.forEach(getSubpaths(baseDir))

  return filenames
}
