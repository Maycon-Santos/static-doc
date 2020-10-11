const { existsSync, symlinkSync, mkdirSync, unlinkSync } = require('fs')
const { DOCS_PUBLIC_ORIGIN_PATH, DOCS_PUBLIC_DESTINY_PATH, DOCS_ROOT_PATH } = require('../../constants')
const log = require('../../utils/log')

module.exports = function linkPublicDir () {
  if (!existsSync(DOCS_PUBLIC_ORIGIN_PATH)) {
    mkdirSync(DOCS_PUBLIC_ORIGIN_PATH)

    log.warn(
      `\`public\` folder not found in ${DOCS_ROOT_PATH}`,
      'This folder is mandatory, but don\'t worry, i created one for you.'
    )
  }

  if (existsSync(DOCS_PUBLIC_DESTINY_PATH)) {
    unlinkSync(DOCS_PUBLIC_DESTINY_PATH)
  }

  symlinkSync(DOCS_PUBLIC_ORIGIN_PATH, DOCS_PUBLIC_DESTINY_PATH)
}
