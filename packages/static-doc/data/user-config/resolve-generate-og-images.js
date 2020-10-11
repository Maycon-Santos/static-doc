const { join } = require('path')
const log = require('../../utils/log')
const { USER_CONFIG_PATH, DOCS_ROOT_PATH } = require('../../constants')

module.exports = function resolveOgImageTemplate (config) {
  if (
    typeof config.ogImageTemplate !== 'string' &&
    typeof config.ogImageTemplate !== 'undefined' &&
    config.ogImageTemplate !== null
  ) {
    log.error(
      'The ogImageTemplate field must be a string or null.',
      `Please review your configuration file: ${USER_CONFIG_PATH}`
    )
    process.exit()
  }

  if (typeof config.ogImageTemplate === 'string') {
    if (/^\./.test(config.ogImageTemplate)) {
      config.ogImageTemplate = join(DOCS_ROOT_PATH, config.ogImageTemplate)
    } else {
      config.ogImageTemplate = require.resolve(config.ogImageTemplate)
    }
  } else if (typeof config.ogImageTemplate === 'undefined') {
    config.ogImageTemplate = require.resolve('static-doc/templates/og-image.html')
  }

  return config
}
