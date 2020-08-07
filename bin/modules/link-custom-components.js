const { symlinkSync, existsSync, unlinkSync } = require('fs')

const {
  customComponentsOriginPath,
  customComponentsDestinyPath
} = require('../../config/build-time')

module.exports = function linkCustomComponents () {
  if (existsSync(customComponentsDestinyPath)) {
    unlinkSync(customComponentsDestinyPath)
  }

  if (existsSync(customComponentsOriginPath)) {
    symlinkSync(customComponentsOriginPath, customComponentsDestinyPath)
  }
}
