const React = require('react')
const getConfig = require('next/config').default

const { publicRuntimeConfig } = getConfig()
const { pages } = publicRuntimeConfig

/**
 * @return {{
 *  [key: string]: Array<{
 *    category: string
 *    data: {
 *      title: string
 *      name: string
 *    }
 *    icon: null | {
 *      dark: string
 *      light: string
 *    }
 *    isExternalLink: boolean
 *    path: string
 *    route: string
 *  }>
 * }}
 */
function useMenu () {
  const menuTree = React.useMemo(() => {
    const tree = {}

    pages.forEach(page => {
      const pathSplitted = page.path.split('/').filter(Boolean)
      const depth = pathSplitted.length
      const treePath = depth >= 1 ? page.category || '' : ''

      if (!tree[treePath]) {
        tree[treePath] = []
      }

      tree[treePath].push(page)
    })

    return tree
  }, [])

  return menuTree
}

module.exports = {
  useMenu
}
