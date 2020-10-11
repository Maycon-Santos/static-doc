const { existsSync } = require('fs')
const pipe = require('../../utils/pipe')
const { USER_CONFIG_PATH } = require('../../constants')
const resolveTheme = require('./resolve-theme')
const resolveBaseUrl = require('./resolve-base-url')
const resolveBuildDirectories = require('./resolve-build-directories')
const resolvePwa = require('./resolve-pwa')
const resolveTitleAffixes = require('./resolve-title-affixes')
const resolveAppName = require('./resolve-app-name')
const resolveGenerateOgImages = require('./resolve-generate-og-images')

function getUserConfig () {
  const config = existsSync(USER_CONFIG_PATH) ? require(USER_CONFIG_PATH) : {}

  return pipe(
    resolveTheme,
    resolveBaseUrl,
    resolveBuildDirectories,
    resolvePwa,
    resolveTitleAffixes,
    resolveAppName,
    resolveGenerateOgImages
  )(config)
}

module.exports = getUserConfig()
