const remove = require('unist-util-remove')
const detectFrontmatter = require('remark-frontmatter')

function removeYAML () {
  return tree => remove(tree, 'yaml')
}

module.exports = require('@next/mdx')({
  options: {
    remarkPlugins: [detectFrontmatter, removeYAML]
  }
})
