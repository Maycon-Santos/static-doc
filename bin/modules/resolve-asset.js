const { resolve, join } = require('path')

const { existsSync, mkdirSync, symlinkSync } = require('fs')

const { argv } = require('yargs')

const {
  assetsDir,
  assetsDestinyPath,
  docsOriginPath
} = require('../../config/build-time')

module.exports = function resolveAsset (assetPath, baseUrl) {
  if (!existsSync(assetsDestinyPath)) {
    mkdirSync(assetsDestinyPath)
  }

  const assetOriginPath = resolve(docsOriginPath, assetPath)
  const assetExt = assetOriginPath.match(/\.[0-9a-z]+$/i)[0]
  const assetName = Buffer.from(assetOriginPath).toString('base64') + assetExt
  const assetDestinyPath = resolve(assetsDestinyPath, assetName)

  if (!existsSync(assetsDestinyPath)) {
    mkdirSync(assetsDestinyPath)
  }

  try {
    symlinkSync(assetOriginPath, assetDestinyPath)
  } catch (e) {
    // It has already been linked
  }

  return join(baseUrl, assetsDir, assetName)
}
