const log = require('../../utils/log')
const { USER_CONFIG_PATH } = require('../../constants')

function resolveManifestUrl (config) {
  if (typeof config.pwa.manifestUrl === 'undefined') {
    return '/manifest.json'
  }

  if (typeof config.pwa.manifestUrl !== 'string') {
    log.error(
      'pwa.manifestUrl must be a string.',
      `Please review your configuration file: ${USER_CONFIG_PATH}`
    )
    process.exit()
  }

  return config.pwa.manifestUrl
}

function resolveDisable (config) {
  if (typeof config.pwa.disable === 'undefined') {
    config.pwa.disable = false
  }

  if (typeof config.pwa.disable !== 'boolean') {
    log.error(
      'pwa.disable must be a string.',
      `Please review your configuration file: ${USER_CONFIG_PATH}`
    )
    process.exit()
  }

  return config.pwa.disable
}

module.exports = function resolvePwa (config) {
  config.pwa.manifestUrl = resolveManifestUrl(config)
  config.pwa.disable = resolveDisable(config)

  return config
}
