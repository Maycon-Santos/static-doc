const { resolve } = require('path')
const { docs } = require('../../config')

module.exports = {
  list: new Set(),
  resolve (assetPath) {
    const fullPath = resolve(docs.root, assetPath)
    this.list.add(fullPath)
    return fullPath
  }
}
