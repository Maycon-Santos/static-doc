const getConfig = require('next/config').default
const { useColorMode } = require('./color-mode')

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

function useLogo () {
  const { colorMode } = useColorMode()

  return {
    image: userConfig.logo && userConfig.logo[colorMode],
    text: userConfig.name
  }
}

module.exports = {
  useLogo
}
