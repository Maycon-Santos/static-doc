const log = require('../../utils/log')
const { USER_CONFIG_PATH } = require('../../constants')
const { menu = [] } = require('../user-config')

module.exports = function resolveIcon (pages) {
  return pages.map(page => {
    const { path } = page
    const options = menu.find(item => item.to === path)

    if (!options || !options.icon) return page

    const { icon } = options

    if (typeof icon === 'object') {
      return {
        ...page,
        icon: {
          light: icon.light || icon.dark,
          dark: icon.dark || icon.light
        }
      }
    }

    if (typeof icon === 'string') {
      return {
        ...page,
        icon: {
          light: icon,
          dark: icon
        }
      }
    }

    log.error(
      `${path} icon must be a string or an object like "{light: 'path', dark: 'path'}"`,
      `Please review your configuration file: ${USER_CONFIG_PATH}`
    )
    process.exit()
  })
}
