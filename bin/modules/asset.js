const { resolve } = require('path')
const { docs } = require('../../config/build-time')

module.exports = {
  list: new Set(),
  resolve (assetPath) {
    const fullPath = resolve(docs.origin, assetPath)
    this.list.add(fullPath)
    return fullPath
  }
}
