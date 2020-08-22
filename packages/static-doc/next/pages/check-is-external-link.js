module.exports = function checkIsExternalLink (route) {
  return /^https?:\/\//.test(route)
}
