const { theme } = require('../data/user-config')

module.exports = function WithThemeAlias (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack (config, options) {
      config.resolve.alias['@static-doc/user-theme'] = theme.path

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
