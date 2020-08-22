const { theme } = require('../bin/modules/user-config')
const { name: projectName } = require('../package.json')

module.exports = function allowAbsoluteImport (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack (config, options) {
      config.module.rules.forEach(rule => {
        const ruleString = rule.test ? rule.test.toString() : ''
        const ruleContainsTs = /tsx?/.test(ruleString)

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

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
