// Assets are resolved here
require('../../../bin/modules/user-config')

const { assets } = require('../../../bin/modules/asset')

module.exports = assets.map(({ key, path }) => {
  console.log(key)
  return `'${key}': require('${path}')`
})
