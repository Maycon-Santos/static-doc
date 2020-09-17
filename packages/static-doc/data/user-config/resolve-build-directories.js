const { join } = require('path')
const log = require('../../utils/log')
const { USER_CONFIG_PATH, DOCS_ROOT_PATH } = require('../../constants')

const fields = [
  {
    name: 'buildDir',
    defaultValue: '../.docs'
  },
  {
    name: 'outDir',
    defaultValue: '../docs_out'
  }
]

module.exports = function resolveBuildDirectories (config) {
  fields.forEach(field => {
    if (typeof config[field.name] === 'undefined') {
      config[field.name] = join(DOCS_ROOT_PATH, field.defaultValue)
      return
    }

    if (typeof config[field.name] !== 'string') {
      log.error(
        `The ${field.name} field must be a string.`,
        `Please review your configuration file: ${USER_CONFIG_PATH}`
      )
      process.exit()
    }

    config[field.name] = join(DOCS_ROOT_PATH, config[field.name])
  })

  return config
}
