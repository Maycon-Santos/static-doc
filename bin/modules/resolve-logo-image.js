const asset = require('./asset')

module.exports = function resolveLogoImage (config) {
  if (config.logo) {
    const logoLight = config.logo.light || config.logo.dark || config.logo
    const logoDark = config.logo.dark || config.logo.light || config.logo
    config.logo = {
      light: asset.resolve(logoLight),
      dark: asset.resolve(logoDark)
    }
  }
}
