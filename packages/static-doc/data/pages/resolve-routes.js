const checkIsExternalLink = require('./check-is-external-link')

module.exports = function resolveRoutes (pages) {
  return pages.map(page => {
    const { path } = page
    const isExternalLink = checkIsExternalLink(path)

    if (isExternalLink) {
      return path
    }

    const formattedTo = path.replace(/.mdx?$/, '').replace(/\/?index/, '')

    return Object.assign(page, { route: '/' + formattedTo })
  })
}
