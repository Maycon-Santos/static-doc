const React = require('react')
const getConfig = require('next/config').default

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

function useUserConfig () {
  return userConfig
}

module.exports = {
  useUserConfig
}
