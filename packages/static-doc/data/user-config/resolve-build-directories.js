const { join } = require('path')
const log = require('../../utils/log')
const { userConfig, docs } = require('../../config')

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
      config[field.name] = join(docs.root, field.defaultValue)
      return
    }

    if (typeof config[field.name] !== 'string') {
      log.error(
        `The ${field.name} field must be a string.`,
        `Please review your configuration file: ${userConfig}`
      )
      process.exit()
    }

    config[field.name] = join(docs.root, config[field.name])
  })

  return config
}
