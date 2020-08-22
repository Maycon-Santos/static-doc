import { useMemo } from 'react'

const getConfig = require('next/config').default

const { publicRuntimeConfig } = getConfig()
const { pages } = publicRuntimeConfig

type MenuTree = {
  [key: string]: Array<{
    category: string
    data: {
      title: string
      name: string
    }
    icon: null | {
      dark: string
      light: string
    }
    isExternalLink: boolean
    path: string
    route: string
  }>
}

export function useMenu (): MenuTree {
  const menuTree = useMemo(() => {
    const tree = {}

    pages.forEach((page: any) => {
      const pathSplit = page.path.split('/').filter(Boolean)
      const depth = pathSplit.length
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
