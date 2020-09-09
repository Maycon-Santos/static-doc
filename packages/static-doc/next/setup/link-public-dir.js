const { existsSync, symlinkSync } = require('fs')
const { pwa } = require('../../bin/modules/user-config')
const { docs } = require('../../config')

module.exports = function linkPublicDir () {
  if (!existsSync(docs.public.origin)) {
    if (!pwa.disable) {
      console.warn(
        '\x1b[33m',
        '\n',
        `\`public\` folder not found in ${docs.root}`,
        '\n',
        'Create the public folder in your docs directory if you intend to do a PWA.',
        '\x1b[0m',
        '\n'
      )
    }
    return
  }

  symlinkSync(docs.public.origin, docs.public.destiny)
}
