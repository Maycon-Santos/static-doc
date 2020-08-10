module.exports = function allowGlobalCssImport (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack (config, options) {
      config.module.rules.forEach(rule => {
        if (rule.oneOf) {
          rule.oneOf.forEach(ruleFragment => {
            const testIsRegex = ruleFragment.test && ruleFragment.test.test
            const isErrorLoader = ruleFragment.issuer && ruleFragment.use.loader !== 'error-loader'

            if (testIsRegex) {
              const ruleContainsGlobalCss = ruleFragment.test.test('css-file.css')

              if (ruleContainsGlobalCss && isErrorLoader) {
                delete ruleFragment.issuer
              }
            }
          })
        }
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
