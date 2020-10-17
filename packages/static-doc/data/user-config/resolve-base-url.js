const { argv } = require('yargs')
const log = require('../../utils/log')
const { USER_CONFIG_PATH } = require('../../constants')

module.exports = function resolveBaseUrl (config) {
  if (
    typeof config.baseUrl !== 'undefined' &&
    typeof config.baseUrl !== 'string'
  ) {
    log.error(
      'The baseUrl field must be a string.',
      `Please review your configuration file: ${USER_CONFIG_PATH}`
    )
    process.exit()
  }

  if (typeof config.baseUrl === 'undefined') {
    config.baseUrl = '/'
    return config
  }

  if (!(/\/$/.test(config.baseUrl))) {
    config.baseUrl = `${config.baseUrl}/`.replace(/(\/\/)$/, '/')
  }

  return config
}
