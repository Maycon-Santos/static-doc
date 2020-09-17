const { readFileSync } = require('fs')
const { join } = require('path')
const { createCompiler } = require('@mdx-js/mdx')
const visit = require('unist-util-visit')
const remove = require('unist-util-remove')
const yaml = require('yaml')
const detectFrontmatter = require('remark-frontmatter')
const { DOCS_PAGES_ORIGIN_PATH } = require('../../constants')

module.exports = function resolveData (pages) {
  return pages.map(page => {
    const { path } = page

    const content = readFileSync(join(DOCS_PAGES_ORIGIN_PATH, path))
    const mdxCompiler = createCompiler({
      remarkPlugins: [detectFrontmatter, extractFrontmatter]
    })

    const { data: { frontmatter = {} } } = mdxCompiler.processSync(content)
    const defaultData = getDefaultData(page)

    return {
      ...page,
      data: {
        ...defaultData,
        ...frontmatter
      }
    }
  })
}

function getDefaultData (page) {
  const { path, isExternalLink } = page

  if (isExternalLink) {
    const domainRegex = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/?\n]+)/
    const name = path.match(domainRegex)[1]

    return { name }
  }

  const name = path.replace(/^.*\//, '').replace(/-/g, ' ').replace(/.mdx?$/, '')
  const title = path.replace(/-/g, ' ').replace(/\//g, ' - ').replace(/.mdx?$/, '')

  return {
    name,
    title,
    description: ''
  }
}

function extractFrontmatter () {
  return (tree, file) => {
    visit(tree, 'yaml', node => {
      file.data.frontmatter = yaml.parse(node.value)
    })
    remove(tree, 'yaml')
  }
}
