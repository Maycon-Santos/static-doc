const loadUserConfig = require('../../../bin/modules/load-user-config')

module.exports = function getUserConfig () {
  return loadUserConfig()
}
