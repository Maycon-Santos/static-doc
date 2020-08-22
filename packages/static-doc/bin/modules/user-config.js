const { readFileSync, existsSync } = require('fs')
const { argv } = require('yargs')
const { userConfig: userConfigPath } = require('../../config')
const resolveMenuIcons = require('./resolve-menu-icons')
const resolveLogoImage = require('./resolve-logo-image')
const resolveFavicon = require('./resolve-favicon')
const resolveTheme = require('./resolve-theme')
const userPackageJson = require(`${process.cwd()}/package.json`)

const userConfig = (() => {
  try {
    const command = argv._[0]
    const configText = existsSync(userConfigPath) ? readFileSync(userConfigPath, { encoding: 'utf-8' }) : '{}'
    const config = JSON.parse(configText)
    const baseUrl = (['build', 'build:static'].includes(command) && config.baseUrl) || '/'

    config.name = config.name || userPackageJson.name
    config.titlePrefix = config.titlePrefix || ''
    config.titleSuffix = config.titleSuffix || ''

    resolveTheme(config)
    resolveMenuIcons(config)
    resolveLogoImage(config)
    resolveFavicon(config)

    config.baseUrl = baseUrl

    return config
  } catch (e) {
    console.warn(e)
    return {}
  }
})()

module.exports = userConfig
