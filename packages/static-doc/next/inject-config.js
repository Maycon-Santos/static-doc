const { resolve } = require('path')
const { root } = require('../config')

module.exports = function injectConfig (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    publicRuntimeConfig: {
      pages: require('../data/pages'),
      repository: require(resolve(root.user, 'package.json')).repository,
      userConfig: require('../data/user-config')
    }
  })
}
