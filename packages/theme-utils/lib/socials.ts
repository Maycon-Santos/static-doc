// @ts-ignore
import getPkgRepo from 'get-pkg-repo'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { repository } = publicRuntimeConfig

export function useSocials () {
  return {
    repository: repository && getPkgRepo({ repository })
  }
}
