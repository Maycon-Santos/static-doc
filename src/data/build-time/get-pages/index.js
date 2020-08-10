const { docs } = require('../../../../config/build-time')

const deepReaddir = require('../../../../utils/deep-readdir')
const resolveLinks = require('./resolve-links')

module.exports = () => {
  const pageFilenames = deepReaddir(docs.destiny)
  const validPages = pageFilenames.filter(filename => /.mdx?$/.test(filename))
  return resolveLinks(validPages)
}
