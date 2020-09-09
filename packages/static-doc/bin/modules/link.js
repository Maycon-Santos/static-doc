const { symlinkSync } = require('fs')
const { join } = require('path')
const { argv } = require('yargs')
const { root } = require('../../config')

module.exports = function link () {
  symlinkSync(root.own, join(root.user, argv.dir))
}
