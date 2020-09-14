const { menu = [] } = require('../user-config')

module.exports = function resolveCategories (pages) {
  return pages.map((page) => {
    const { path, isExternalLink } = page
    const options = menu.find(item => item.to === path)

    if (options && options.category) {
      return {
        ...page,
        category: options.category
      }
    }

    if (isExternalLink) return page

    const pathSplit = path.split('/')

    if (pathSplit.length > 1) {
      return {
        ...page,
        category: pathSplit[0].replace(/-/g, ' ')
      }
    }

    return page
  })
}
