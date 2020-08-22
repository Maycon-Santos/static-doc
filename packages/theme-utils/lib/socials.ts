// @ts-ignore
import getPkgRepo from 'get-pkg-repo'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { userPackage } = publicRuntimeConfig

export function useSocials () {
  return {
    repository: userPackage.repository && getPkgRepo(userPackage)
  }
}
