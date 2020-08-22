const userConfig = require('../../bin/modules/user-config')
const checkIsExternalLink = require('./check-is-external-link')
const formatPage = require('./format-page')

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
