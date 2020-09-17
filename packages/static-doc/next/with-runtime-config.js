const { resolve } = require('path')
const { USER_ROOT_PATH } = require('../constants')

module.exports = function WithRuntimeConfig (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    publicRuntimeConfig: {
      pages: require('../data/pages'),
      repository: require(resolve(USER_ROOT_PATH, 'package.json')).repository,
      userConfig: require('../data/user-config')
    }
  })
}
