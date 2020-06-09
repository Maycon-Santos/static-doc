const {
  resolve,
  join
} = require('path')

const {
  docsDestinyPath
} = require('../../../config/build-time')

const deepReaddir = require('./deep-readdir')
const extractPageData = require('./extract-page-data')
const resolveRoute = require('./resolve-route')
const resolveLinks = require('./resolve-links')

module.exports = () => {
  const pageFilenames = deepReaddir(docsDestinyPath)
  const validPages = pageFilenames.filter(filename => /.mdx?$/.test(filename))
  return resolveLinks(validPages)
}
