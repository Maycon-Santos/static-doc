const { resolve } = require('path')
const { userConfigPath } = require('../../config')

module.exports = function resolveTheme (config) {
  if (config.theme) {
    if (/^\./.test(config.theme)) {
      config.theme = resolve(userConfigPath, config.theme)
    } else {
      config.theme = require.resolve(config.theme)
    }
  }

  config.theme = require.resolve('@static-doc/default-theme')
}
