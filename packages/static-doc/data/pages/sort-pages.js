const log = require('../../utils/log')
const { userConfig } = require('../../config')
const { menu = [] } = require('../user-config')

module.exports = function sortPages (pages) {
  const sortedPages = []

  menu.forEach(item => {
    const to = typeof item === 'object' ? item.to : item

    const page = pages.find(page => page.path === to)
    const { isExternalLink } = page

    if (!page && !isExternalLink) {
      log.error(
        `${to} page not found`,
        `Please review your configuration file: ${userConfig}`
      )
      process.exit()
    }

    sortedPages.push(page)
  })

  const restPages = pages.filter(page => !sortedPages.includes(page))

  return [...sortedPages, ...restPages]
}
