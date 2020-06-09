const {
  resolve
} = require('path')

const remove = require('unist-util-remove')
const detectFrontmatter = require('remark-frontmatter')

const {
  buildDir,
  devDir
} = require('./config/build-time')

const resolveCustomComponents = require('./nextjs-utils/resolve-custom-components')

function removeYAML () {
  return tree => remove(tree, 'yaml')
}

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [detectFrontmatter, removeYAML]
  }
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  distDir: process.env.NODE_ENV === 'production' ? buildDir : devDir,
  webpack (config) {
    config.module.rules.forEach(rule => {
      const ruleString = rule.test ? rule.test.toString() : ''
      const ruleContainsTs = /tsx?/.test(ruleString)

      if (ruleContainsTs && rule.use && rule.use.loader === 'next-babel-loader') {
        rule.include = undefined
      }
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      ...resolveCustomComponents()
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.tsx?$/
      },
      use: ['@svgr/webpack']
    })

    return config
  }
})
