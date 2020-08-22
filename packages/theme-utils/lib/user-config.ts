import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

export function useUserConfig () {
  return userConfig
}
