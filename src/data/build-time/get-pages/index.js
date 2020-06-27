const {
  resolve,
  join
} = require('path')

const {
  docsDestinyPath
} = require('../../../../config/build-time')

const deepReaddir = require('../../../../utils/deep-readdir')
const resolveLinks = require('./resolve-links')

module.exports = () => {
  const pageFilenames = deepReaddir(docsDestinyPath)
  const validPages = pageFilenames.filter(filename => /.mdx?$/.test(filename))
  return resolveLinks(validPages)
}
