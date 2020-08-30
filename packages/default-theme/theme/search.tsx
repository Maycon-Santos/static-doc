import React from 'react'
import Link from 'next/link'
import { usePages, useAsset, useColorMode, Page } from '@static-doc/theme-utils'
import styles from './styles/search.css'

type Props = {
  search: string
}

const Search: React.FC<Props> = props => {
  const { search: rawSearch } = props
  const pages = usePages()
  const { colorMode } = useColorMode()
  const search = rawSearch.toLowerCase()

  const foundPagesByCategory = pages
    .filter(page => page.category.toLocaleLowerCase().includes(search))
    .sort((a, b) => (a.category > b.category ? 1 : -1))

  const foundPagesByName = pages
    .filter(page => page.data.name.toLocaleLowerCase().includes(search))
    .sort((a, b) => (a.data.name > b.data.name ? 1 : -1))

  const fountPagesByDescription = pages
    .filter(page => page.data.description.toLocaleLowerCase().includes(search))
    .sort((a, b) => (a.data.description > b.data.description ? 1 : -1))

  const filteredPages = Array.from(
    new Set([
      ...foundPagesByName,
      ...fountPagesByDescription,
      ...foundPagesByCategory
    ])
  )

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {filteredPages.map(page => {
          if (page.isExternalLink) return null
          const iconSrc = page.icon && useAsset(page.icon[colorMode])

          return (
            <li key={page.route} className={styles.item}>
              <Link href={page.route}>
                <a className={styles.itemLink}>
                  <span className={styles.pageName}>
                    {iconSrc && (
                      <img src={iconSrc} alt='' className={styles.icon} />
                    )}
                    {page.data.name}
                  </span>
                  {Boolean(page.data.description) && (
                    <span className={styles.pageDescription}>
                      {page.data.description.slice(0, 100)}
                      {page.data.description.length > 100 && '...'}
                    </span>
                  )}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Search
