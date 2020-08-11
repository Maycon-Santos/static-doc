const asset = require('./asset')

module.exports = function resolveMenuIcons (config) {
  if (config.menu) {
    config.menu = config.menu.map(item => {
      if (item.icon) {
        const iconLight = item.icon.light || item.icon.dark || item.icon
        const iconDark = item.icon.dark || item.icon.light || item.icon

        return {
          ...item,
          icon: {
            light: asset.resolve(iconLight),
            dark: asset.resolve(iconDark)
          }
        }
      }

      return item
    })
  }
}
