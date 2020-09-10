const { resolve } = require('path')
const { root } = require('../config')

module.exports = function injectConfig (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    publicRuntimeConfig: {
      pages: require('./pages'),
      userPackage: require(resolve(root.user, 'package.json')),
      userConfig: require('../data/user-config')
    }
  })
}
