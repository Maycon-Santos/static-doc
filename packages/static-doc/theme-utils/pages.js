const React = require('react')
const { useRouter } = require('next/router')
const getConfig = require('next/config').default

const { publicRuntimeConfig } = getConfig()
const { pages, userConfig } = publicRuntimeConfig

/**
 * @return {Array<{
  *  category: string
  *  data: {
  *    title: string
  *    name: string
  *  }
  *  icon: {
  *    light: string
  *    dark: string
  *  }
  *  isExternalLink: boolean
  *  path: string
  *  route: string
  * }>}
  */
function usePages () {
  return pages
}

/**
 * @return {{
 *  category: string
 *  data: {
 *    title: string
 *    name: string
 *  }
 *  icon: {
 *    light: string
 *    dark: string
 *  }
 *  isExternalLink: boolean
 *  path: string
 *  route: string
 * }}
 */
function useCurrentPage () {
  const router = useRouter()
  const pathname = router.pathname.replace(/^\//, userConfig.baseUrl || '/')

  const foundPage = pages.find(page => pathname === page.route)

  return foundPage || {}
}

module.exports = {
  usePages,
  useCurrentPage
}
