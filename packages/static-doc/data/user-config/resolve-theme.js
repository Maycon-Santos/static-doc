const { join } = require('path')
const log = require('../../utils/log')
const { docs, userConfig } = require('../../config')

module.exports = function resolveTheme (config) {
  if (typeof config.theme === 'string') {
    if (/^\./.test(config.theme)) {
      config.theme = join(docs.root, config.theme)
    } else {
      config.theme = require.resolve(config.theme)
    }

    return config
  }

  if (typeof config.theme === 'undefined') {
    config.theme = require.resolve('@static-doc/default-theme')
    return config
  }

  log.error(
    'The theme field must be a string.',
    `Please review your configuration file: ${userConfig}`
  )
  process.exit()
}
