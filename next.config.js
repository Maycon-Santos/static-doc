const { resolve } = require('path')

const { argv } = require('yargs')

const remove = require('unist-util-remove')
const detectFrontmatter = require('remark-frontmatter')

const { buildDir, devDir, isDev } = require('./config/build-time')

const loadUserConfig = require('./bin/modules/load-user-config')
const resolveCustomComponents = require('./utils/resolve-custom-components')

function removeYAML () {
  return tree => remove(tree, 'yaml')
}

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [detectFrontmatter, removeYAML]
  }
})

const command = argv._[0]
const userConfig = loadUserConfig()
const { name: projectName } = require('./package.json')

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  exportTrailingSlash: command === 'build:static',
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

      if (rule.oneOf) {
        rule.oneOf.forEach(ruleFragment => {
          const ruleContainsGlobalCss = ruleFragment.test && ruleFragment.test.test && ruleFragment.test.test('css-file.css')
          if (ruleContainsGlobalCss && ruleFragment.issuer && ruleFragment.use.loader !== 'error-loader') {
            delete ruleFragment.issuer
          }
        })
      }

      if (
        ruleContainsTs &&
        rule.use &&
        rule.use.loader === 'next-babel-loader'
      ) {
        rule.include = undefined
        rule.exclude = excludePath => {
          if (new RegExp(`node_modules/${projectName}`).test(excludePath)) {
            return false
          }
          return /node_modules/.test(excludePath)
        }
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
