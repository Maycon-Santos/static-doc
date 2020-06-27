const checkIsExternalLink = require('./check-is-external-link')
const getUserConfig = require('../get-user-config')

module.exports = function resolveRoute (path) {
  const userConfig = getUserConfig()
  const isExternalLink = checkIsExternalLink(path)

  if (isExternalLink) {
    return path
  }

  return `${userConfig.baseUrl}${path.replace(/.mdx?$/, '').replace(/\/?index/, '')}`
}
