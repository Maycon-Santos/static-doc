const { createCompiler } = require('@mdx-js/mdx')

const { join } = require('path')

const { readFileSync } = require('fs')

const visit = require('unist-util-visit')
const remove = require('unist-util-remove')
const yaml = require('yaml')
const detectFrontmatter = require('remark-frontmatter')

const { docs } = require('../../config')

const resolveRoute = require('./resolve-route')
const checkIsExternalLink = require('./check-is-external-link')

function extractFrontmatter () {
  return (tree, file) => {
    visit(tree, 'yaml', node => {
      file.data.frontmatter = yaml.parse(node.value)
    })
    remove(tree, 'yaml')
  }
}

function resolveData (data, options) {
  const path = options.to || options
  const isExternalLink = checkIsExternalLink(path)

  let defaultTitle, defaultName

  const { frontmatter = {} } = data || {}

  const route = resolveRoute(path)

  if (isExternalLink) {
    const domainRegex = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/?\n]+)/
    defaultName = path.match(domainRegex)[1]
  } else {
    defaultTitle = route.replace(/-/g, ' ').replace(/\//g, ' - ')
    defaultName = route
      .replace(/^\/.*\//, '')
      .replace(/(-|\/)/g, ' ')
      .trim()
  }

  const title = options.title || frontmatter.title || defaultTitle
  const name = options.name || frontmatter.name || defaultName

  return {
    title,
    name
  }
}

module.exports = function extractPageData (options) {
  const path = options.to || options
  const isExternalLink = checkIsExternalLink(path)

  if (isExternalLink) {
    return resolveData(null, options)
  }

  const content = readFileSync(join(docs.pages.destiny, path))
  const mdxCompiler = createCompiler({
    remarkPlugins: [detectFrontmatter, extractFrontmatter]
  })

  const { data } = mdxCompiler.processSync(content)

  return resolveData(data, options)
}
