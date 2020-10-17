import { useMemo } from 'react'
import { useRouter } from 'next/router'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { userConfig } = publicRuntimeConfig

export type Page = {
  category: string
  data: {
    title: string
    name: string
    description: string
    related: Page[]
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
  return useMemo(() => JSON.parse(JSON.stringify(pages)), [])
}

export function useCurrentPage (): Page | undefined {
  const router = useRouter()
  const pathname = router.pathname.replace(
    new RegExp(`^${userConfig.baseUrl.replace(/\//g, '\\/')}`),
    '/'
  )

  const foundPage = pages.find(page => pathname === page.route)

  return foundPage
}
