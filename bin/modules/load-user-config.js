const { resolve } = require('path')
const { readFileSync, realpathSync, readdirSync, existsSync } = require('fs')
const { userConfigPath, assetsDestinyPath } = require('../../config/build-time')
const resolveAsset = require('./resolve-asset')
const { argv } = require('yargs')
const userPackageJson = require(`${process.cwd()}/package.json`)

module.exports = function loadUserConfig () {
  try {
    const command = argv._[0]
    const configText = existsSync(userConfigPath) ? readFileSync(userConfigPath, { encoding: 'utf-8' }) : '{}'
    const config = JSON.parse(configText)
    const baseUrl = (['build', 'build:static'].includes(command) && config.baseUrl) || '/'

    config.name = config.name || userPackageJson.name

    if (config.menu) {
      config.menu = config.menu.map(item => {
        if (item.icon) {
          const iconLight = item.icon.light || item.icon.dark || item.icon
          const iconDark = item.icon.dark || item.icon.light || item.icon

          return {
            ...item,
            icon: {
              light: resolveAsset(iconLight, baseUrl),
              dark: resolveAsset(iconDark, baseUrl)
            }
          }
        }

        return item
      })
    }

    if (config.logo) {
      const logoLight = config.logo.light || config.logo.dark || config.logo
      const logoDark = config.logo.dark || config.logo.light || config.logo
      config.logo = {
        light: resolveAsset(logoLight, baseUrl),
        dark: resolveAsset(logoDark, baseUrl)
      }
    }

    config.baseUrl = baseUrl

    return config
  } catch (e) {
    console.warn(e)
    return {}
  }
}
