const { existsSync } = require('fs')
const { join } = require('path')
const log = require('../../utils/log')
const { root, userConfig } = require('../../config')

const userPackageJsonPath = join(root.user, 'package.json')
const userPackageJson = existsSync(userPackageJsonPath) ? require(userPackageJsonPath) : null

function getAppNameByPackageJson () {
  const appName = userPackageJson ? userPackageJson.name : ''

  if (!userPackageJson) {
    log.warn(
      `${userPackageJsonPath} not found.`,
      `You need to set your app name in ${userConfig}.`
    )
  }

  if (!userPackageJson.name) {
    log.warn(
      'Name field not found in your package.json.',
      `You need to set your app name in your package.json or ${userConfig}.`
    )
  }

  return appName
}

module.exports = function resolveAppName (config) {
  if (typeof config.name === 'undefined') {
    config.name = getAppNameByPackageJson()
    return config
  }

  if (
    typeof config.name === 'string' ||
    typeof config.name === 'number'
  ) {
    config.name = `${config.name}`
    return config
  }

  log.error(
    'The name field must be a string or number.',
    `Please review your configuration file: ${userConfig}`
  )

  process.exit()
}
