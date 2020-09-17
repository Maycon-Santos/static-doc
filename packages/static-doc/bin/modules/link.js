const { symlinkSync, existsSync } = require('fs')
const { join } = require('path')
const { argv } = require('yargs')
const log = require('../../utils/log')
const { OWN_ROOT_PATH, USER_ROOT_PATH } = require('../../constants')

module.exports = function link () {
  const destiny = join(USER_ROOT_PATH, argv.dir)

  if (existsSync(destiny)) {
    log.warn(`${destiny} already exists`)
    process.exit()
  }

  symlinkSync(OWN_ROOT_PATH, destiny)
}
