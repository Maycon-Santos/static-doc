import { useMemo } from 'react'
import pages from 'data/pages'

type MenuTree = {
  [key: string]: Array<any>
}

export function useMenu () {
  const menuTree = useMemo<MenuTree>(() => {
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
