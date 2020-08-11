const checkIsExternalLink = require('./check-is-external-link')
const resolveRoute = require('./resolve-route')
const extractPageData = require('./extract-page-data')
const resolveCategory = require('./resolve-category')

module.exports = function formatPage (options) {
  const to = options.to || options
  const isExternalLink = checkIsExternalLink(to)
  const icon = options.icon || null
  const route = resolveRoute(to)
  const category = resolveCategory(route, options)
  const data = extractPageData(options)

  return {
    path: to,
    category,
    route: route,
    icon,
    isExternalLink,
    data
  }
}