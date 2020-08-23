// @ts-ignore
const preval = require('babel-plugin-preval/macro')

const getAssets = preval`module.exports = require('../build-time/get-assets')`
const assets = preval`module.exports = { run: () => ({${getAssets}}) }`.run()

module.exports = function getAsset (path) {
  return assets[path]
}
