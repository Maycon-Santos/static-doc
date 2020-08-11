require('../../../bin/modules/user-config')

const assetsPath = Array.from(require('../../../bin/modules/asset').list)

module.exports = assetsPath.map(d => `'${d}': require('${d}')`)
