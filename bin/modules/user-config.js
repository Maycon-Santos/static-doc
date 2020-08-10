const { readFileSync, existsSync } = require('fs')
const { useConfig } = require('../../config')
const asset = require('./asset')
const { argv } = require('yargs')
const userPackageJson = require(`${process.cwd()}/package.json`)

const userConfig = (() => {
  try {
    const command = argv._[0]
    const configText = existsSync(useConfig) ? readFileSync(useConfig, { encoding: 'utf-8' }) : '{}'
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
              light: asset.resolve(iconLight, baseUrl),
              dark: asset.resolve(iconDark, baseUrl)
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
        light: asset.resolve(logoLight, baseUrl),
        dark: asset.resolve(logoDark, baseUrl)
      }
    }

    config.baseUrl = baseUrl

    return config
  } catch (e) {
    console.warn(e)
    return {}
  }
})()

module.exports = userConfig
