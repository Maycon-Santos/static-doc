const { join, dirname } = require('path')
const log = require('../../../utils/log')
const { DOCS_PAGES_ORIGIN_PATH } = require('../../../constants')

module.exports = function resolveRelatedPages (pages) {
  return pages.map(page => {
    const { path, data } = page

    if (!data.related) return page

    const absolutePath = join(DOCS_PAGES_ORIGIN_PATH, path)
    const absolutePathDirName = dirname(absolutePath)
    const relatedPaths = data.related.split(',').map(path => path.trim())
    const relatedAbsolutePaths = relatedPaths.map(path => join(absolutePathDirName, path))
    const relatedPathsFromDocs = relatedAbsolutePaths.map(path => path.replace(`${DOCS_PAGES_ORIGIN_PATH}/`, ''))

    const relatedPageIndexes = relatedPathsFromDocs.map((path, index) => {
      const foundIndex = pages.findIndex(page => page.path === path)

      if (foundIndex < 0) {
        log.warn(`${relatedPaths[index]} file not found, please review the "related" field in ${absolutePath}`)
        return null
      }

      return foundIndex
    })

    const sanitizedRelatedPageIndexes = relatedPageIndexes.filter(index => index !== null)

    const related = sanitizedRelatedPageIndexes.map(index => pages[index])

    return {
      ...page,
      data: {
        ...data,
        related
      }
    }
  })
}
