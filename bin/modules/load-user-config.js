const {
  resolve
} = require('path')

const {
  readFileSync,
  realpathSync
} = require('fs')

const {
  userConfigPath
} = require('../../config/build-time')

const resolveAsset = require('./resolve-asset')

module.exports = function loadUserConfig () {
  try {
    const configText = readFileSync(userConfigPath, { encoding: 'utf-8' })
    const config = JSON.parse(configText)

    if (config.menu) {
      config.menu = config.menu.map(item => {
        if (item.icon) {
          const iconLight = item.icon.light || item.icon.dark || item.icon
          const iconDark = item.icon.dark || item.icon.light || item.icon

          return {
            ...item,
            icon: {
              light: resolveAsset(iconLight),
              dark: resolveAsset(iconDark)
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
        light: resolveAsset(logoLight),
        dark: resolveAsset(logoDark)
      }
    }

    return config
  } catch (e) {
    return {}
  }
}
