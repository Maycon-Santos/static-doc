const { existsSync, symlinkSync } = require('fs')
const { pwa } = require('../../data/user-config')
const { DOCS_PUBLIC_ORIGIN_PATH, DOCS_PUBLIC_DESTINY_PATH, DOCS_ROOT_PATH } = require('../../constants')

module.exports = function linkPublicDir () {
  if (!existsSync(DOCS_PUBLIC_ORIGIN_PATH)) {
    if (!pwa.disable) {
      console.warn(
        '\x1b[33m',
        '\n',
        `\`public\` folder not found in ${DOCS_ROOT_PATH}`,
        '\n',
        'Create the public folder in your docs directory if you intend to do a PWA.',
        '\x1b[0m',
        '\n'
      )
    }
    return
  }

  symlinkSync(DOCS_PUBLIC_ORIGIN_PATH, DOCS_PUBLIC_DESTINY_PATH)
}
