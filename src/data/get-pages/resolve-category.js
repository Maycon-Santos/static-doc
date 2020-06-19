const checkIsExternalLink = require('./check-is-external-link')

module.exports = function resolveCategory (route, options) {
  const isExternalLink = checkIsExternalLink(route)

  if (isExternalLink) {
    return options.category || ''
  }

  const routeSplitted = route.split('/').filter(Boolean)

  if (routeSplitted.length >= 2) {
    return options.category || routeSplitted[0].replace(/-/g, ' ')
  }

  return ''
}
