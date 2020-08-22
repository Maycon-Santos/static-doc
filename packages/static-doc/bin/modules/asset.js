const { resolve } = require('path')
const { docs } = require('../../config')

module.exports = {
  assets: [],
  resolve (assetPath) {
    const assetKey = `asset:${this.assets.length}`

    this.assets.push({
      key: assetKey,
      path: resolve(docs.root, assetPath)
    })

    return assetKey
  }
}
