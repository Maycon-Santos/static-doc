module.exports = function resolveHeadingId (content = '') {
  return content.replace(/ /g, '-')
}
