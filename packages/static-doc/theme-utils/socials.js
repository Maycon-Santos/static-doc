const getConfig = require('next/config').default
const getPkgRepo = require('get-pkg-repo')

const { publicRuntimeConfig } = getConfig()
const { userPackage } = publicRuntimeConfig

function useSocials () {
  return {
    repository: userPackage.repository && getPkgRepo(userPackage)
  }
}

module.exports = {
  useSocials
}
