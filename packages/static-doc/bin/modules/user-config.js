const { existsSync } = require('fs')
const { resolve } = require('path')
const { argv } = require('yargs')
const { userConfig: userConfigPath } = require('../../config')
const resolveMenuIcons = require('./resolve-menu-icons')
const resolveLogoImage = require('./resolve-logo-image')
const resolveFavicon = require('./resolve-favicon')
const resolveTheme = require('./resolve-theme')
const { root } = require('../../config')
const userPackageJson = require(`${process.cwd()}/package.json`)

const userConfig = (() => {
  try {
    const command = argv._[0]
    const config = existsSync(userConfigPath) ? require(userConfigPath) : {}
    const baseUrl =
      (['build', 'build:static'].includes(command) && config.baseUrl) || '/'

    config.name = config.name || userPackageJson.name
    config.titlePrefix = config.titlePrefix || ''
    config.titleSuffix = config.titleSuffix || ''

    config.pwa.manifestUrl = config.pwa.manifestUrl || '/manifest.json'
    config.pwa.disable =
      typeof config.pwa.disable === 'boolean' ? config.pwa.disable : false

    config.buildDir = resolve(root.user, config.buildDir || '.docs')
    config.buildStaticDir = resolve(
      root.user,
      config.buildStaticDir || 'docs_out'
    )

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
