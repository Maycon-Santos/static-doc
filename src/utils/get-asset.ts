import preval from 'babel-plugin-preval/macro'

const getAssets = preval`module.exports = require('./build-time/get-assets')`
const assets = preval`module.exports = { run: () => ({${getAssets}}) }`.run()

export default function getAsset (path: string): string {
  return assets[path]
}
