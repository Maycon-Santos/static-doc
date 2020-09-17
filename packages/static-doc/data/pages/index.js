const pipe = require('../../utils/pipe')
const deepReaddir = require('../../utils/deep-readdir')
const log = require('../../utils/log')
const { DOCS_PAGES_ORIGIN_PATH } = require('../../constants')
const { menu = [] } = require('../user-config')
const sortPages = require('./sort-pages')
const resolveRoutes = require('./resolve-routes')
const resolveCategories = require('./resolve-categories')
const checkIsExternalLink = require('./check-is-external-link')
const resolveData = require('./resolve-data')
const resolveIcon = require('./resolve-icon')

function getPages () {
  const pagesFilename = deepReaddir(DOCS_PAGES_ORIGIN_PATH)
  const validPagesFilename = pagesFilename.filter(filename => {
    if (/.mdx?$/.test(filename)) return true

    log.warn(`The ${filename} file is not a valid page. Move this file to an off-page directory`)
  })
  const pages = validPagesFilename.map(filename => {
    return {
      path: filename,
      isExternalLink: false
    }
  })

  menu.forEach(item => {
    const path = typeof item === 'object' ? item.to : item
    if (checkIsExternalLink(path)) {
      pages.unshift({
        ...item,
        isExternalLink: true
      })
    }
  })

  return pipe(
    sortPages,
    resolveRoutes,
    resolveCategories,
    resolveData,
    resolveIcon
  )(pages)
}

module.exports = getPages()
