import getConfig from 'next/config'
import { useColorMode } from './color-mode'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

export function useLogo () {
  const { colorMode } = useColorMode()

  return {
    image: userConfig.logo && userConfig.logo[colorMode],
    text: userConfig.name
  }
}
