const { readFileSync } = require('fs')
const { join } = require('path')
const { createCompiler } = require('@mdx-js/mdx')
const visit = require('unist-util-visit')
const remove = require('unist-util-remove')
const detectFrontmatter = require('remark-frontmatter')
const yaml = require('yaml')
const pipe = require('../../../utils/pipe')
const { DOCS_PAGES_ORIGIN_PATH } = require('../../../constants')
const resolveTitle = require('./resolve-title')
const resolveName = require('./resolve-name')
const resolveDescription = require('./resolve-description')
const resolveRelatedPages = require('./resolve-related-pages')

function extractFrontmatter () {
  return (tree, file) => {
    visit(tree, 'yaml', node => {
      file.data.frontmatter = yaml.parse(node.value)
    })
    remove(tree, 'yaml')
  }
}

function getPagesWithData (pages) {
  return pages.map(page => {
    const { path } = page
    const content = readFileSync(join(DOCS_PAGES_ORIGIN_PATH, path))
    const mdxCompiler = createCompiler({
      remarkPlugins: [detectFrontmatter, extractFrontmatter]
    })

    const { data: { frontmatter } } = mdxCompiler.processSync(content)
    const data = frontmatter || {}

    return {
      ...page,
      data
    }
  })
}

module.exports = function resolvePageData (pages) {
  const pagesWithData = getPagesWithData(pages)

  return pipe(
    resolveTitle,
    resolveName,
    resolveRelatedPages,
    resolveDescription
  )(pagesWithData)
}
