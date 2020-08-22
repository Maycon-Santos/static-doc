const { docs } = require('../../config')

const deepReaddir = require('../../utils/deep-readdir')
const resolveLinks = require('./resolve-links')

const pageFilenames = deepReaddir(docs.pages.destiny)
const validPages = pageFilenames.filter(filename => /.mdx?$/.test(filename))

module.exports = resolveLinks(validPages)
