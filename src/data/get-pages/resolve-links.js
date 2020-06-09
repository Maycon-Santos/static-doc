const getUserConfig = require('../get-user-config')
const extractPageData = require('./extract-page-data')
const checkIsExternalLink = require('./check-is-external-link')
const resolveRoute = require('./resolve-route')

function resolveCategory (route, options) {
  const isExternalLink = checkIsExternalLink(route)

  if (isExternalLink) {
    return options.category || ''
  }

  return options.category || route.split('/')[1].replace(/-/g, ' ')
}

function formatPage (options) {
  const to = options.to || options
  const isExternalLink = checkIsExternalLink(to)
  const icon = options.icon || null
  const route = resolveRoute(to)
  const category = resolveCategory(route, options)
  const data = extractPageData(options)

  return {
    path: to,
    category,
    route,
    icon,
    isExternalLink,
    data
  }
}

module.exports = function resolveLinks (pages) {
  const userConfig = getUserConfig()
  const menu = userConfig.menu || []
  const pagesCopy = [...pages]
  const sortedPages = []

  menu.forEach(options => {
    const to = options.to || options
    const page = pagesCopy.find(path => path === to)
    const isExternalLink = checkIsExternalLink(to)

    if (!page && !isExternalLink) {
      throw new Error(`Could not find file ${to}.`)
    }

    const formattedPage = formatPage(options)

    sortedPages.push(formattedPage)

    if (!isExternalLink) {
      pagesCopy.splice(pagesCopy.indexOf(to), 1)
    }
  })

  const restPages = pagesCopy.map(path => formatPage(path))

  return [...sortedPages, ...restPages]
}
