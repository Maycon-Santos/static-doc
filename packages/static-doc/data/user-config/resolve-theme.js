const { join } = require('path')
const log = require('../../utils/log')
const { DOCS_ROOT_PATH, USER_CONFIG_PATH } = require('../../constants')

module.exports = function resolveTheme (config) {
  const themePath = typeof config.theme === 'object' ? config.theme.path : config.theme
  const themeConfig = (typeof config.theme === 'object' && config.theme.config) || {}

  config.theme = { config: themeConfig }

  if (typeof themePath === 'string') {
    if (/^\./.test(themePath)) {
      config.theme.path = join(DOCS_ROOT_PATH, themePath)
    } else {
      config.theme.path = require.resolve(themePath)
    }

    return config
  }

  if (typeof themePath === 'undefined') {
    config.theme.path = require.resolve('@static-doc/default-theme')
    return config
  }

  log.error(
    'The theme field must be a string.',
    `Please review your configuration file: ${USER_CONFIG_PATH}`
  )
  process.exit()
}
