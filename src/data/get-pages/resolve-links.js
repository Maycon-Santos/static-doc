const {
  join
} = require('path')
const getUserConfig = require('../get-user-config')
const extractPageData = require('./extract-page-data')
const checkIsExternalLink = require('./check-is-external-link')
const resolveCategory = require('./resolve-category')
const resolveRoute = require('./resolve-route')
const formatPage = require('./format-page')

const userConfig = getUserConfig()

module.exports = function resolveLinks (pages) {
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
