module.exports = function generateBuildId (nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID
      } else {
        return `${new Date().getTime()}`
      }
    }
  })
}
