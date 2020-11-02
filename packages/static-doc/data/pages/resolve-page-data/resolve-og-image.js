const userConfig = require('../../user-config')

const { ogImageTemplate } = userConfig

module.exports = function resolveOgImage (pages) {
  return pages.map(page => {
    page.image = page.image || !ogImageTemplate || ''
    return page
  })
}
