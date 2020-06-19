const {
  resolve
} = require('path')

const remove = require('unist-util-remove')
const detectFrontmatter = require('remark-frontmatter')

const {
  buildDir,
  devDir
} = require('./config/build-time')

const loadUserConfig = require('./src/data/get-user-config')

const resolveCustomComponents = require('./nextjs-utils/resolve-custom-components')

function removeYAML () {
  return tree => remove(tree, 'yaml')
}

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [detectFrontmatter, removeYAML]
  }
})

const userConfig = loadUserConfig()
const isDev = process.env.NODE_ENV !== 'production'

console.log(userConfig.baseUrl !== '/' ? userConfig.baseUrl : '', '################')

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  exportTrailingSlash: true,
  distDir: isDev ? devDir : buildDir,
  assetPrefix: userConfig.baseUrl !== '/' ? userConfig.baseUrl : '',
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID
    } else {
      return `${new Date().getTime()}`
    }
  },
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
