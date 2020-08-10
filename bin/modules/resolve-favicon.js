const asset = require('./asset')

module.exports = function resolveFavicon (config) {
  if (config.favicon) {
    config.favicon = asset.resolve(config.favicon)
  }
}
