const checkIsExternalLink = require('./check-is-external-link')

module.exports = function resolveRoute (path) {
  const isExternalLink = checkIsExternalLink(path)

  if (isExternalLink) {
    return path
  }

  return `/${path.replace(/.mdx?$/, '').replace(/\/?index/, '')}`
}
