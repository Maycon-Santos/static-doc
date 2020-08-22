const userConfig = require('../bin/modules/user-config')

module.exports = function injectThemeAlias (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack (config, options) {
      config.resolve.alias['@static-doc/user-theme'] = userConfig.theme

      console.log(userConfig.theme)

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
