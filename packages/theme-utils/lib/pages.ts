import { useRouter } from 'next/router'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

type Page = {
  category: string
  data: {
    title: string
    name: string
  }
  icon: {
    light: string
    dark: string
  }
  isExternalLink: boolean
  path: string
  route: string
}

const pages = publicRuntimeConfig.pages as Page[]

export function usePages () {
  return pages
}

export function useCurrentPage (): Page | undefined {
  const router = useRouter()
  const pathname = router.pathname.replace(/^\//, userConfig.baseUrl || '/')

  const foundPage = pages.find(page => pathname === page.route)

  return foundPage
}
