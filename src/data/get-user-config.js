module.exports = function getUserConfig () {
  return JSON.parse(process.env.config)
}
