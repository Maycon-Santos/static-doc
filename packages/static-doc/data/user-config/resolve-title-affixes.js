const log = require('../../utils/log')
const { userConfig } = require('../../config')

module.exports = function resolveTitleAffixes (config) {
  const affixes = ['titlePrefix', 'titleSuffix']

  affixes.forEach(field => {
    if (
      typeof config[field] === 'string' ||
      typeof config[field] === 'number'
    ) {
      config[field] = `${config[field]}`
      return config
    }

    if (typeof config[field] === 'undefined') {
      config[field] = ''
      return config
    }

    log.error(
      `The ${field} field must be a string or number.`,
      `Please review your configuration file: ${userConfig}`
    )
    process.exit()
  })

  return config
}
