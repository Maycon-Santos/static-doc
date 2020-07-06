import { useRouter } from 'next/router'
import pages from '../data/pages'
import userConfig from '../data/user-config'

export function useCurrentPageData () {
  const router = useRouter()
  const pathname = router.pathname.replace(/^\//, userConfig.baseUrl)

  return pages.find(page => pathname === page.route)
}
