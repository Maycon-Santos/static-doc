const { argv } = require('yargs')
const log = require('../../utils/log')
const { userConfig } = require('../../config')

// TODO: Checar se funciona
const command = argv._[0]

module.exports = function resolveBaseUrl (config) {
  if (
    typeof config.baseUrl !== 'undefined' &&
    typeof config.baseUrl !== 'string'
  ) {
    log.error(
      'The baseUrl field must be a string.',
      `Please review your configuration file: ${userConfig}`
    )
    process.exit()
  }

  if (
    command === 'build' ||
    command === 'build:static' ||
    typeof config.baseUrl === 'undefined'
  ) {
    config.baseUrl = '/'
    return config
  }

  return config
}
