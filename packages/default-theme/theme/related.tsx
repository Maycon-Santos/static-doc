import React from 'react'
import Link from 'next/link'
import { useCurrentPage, useColorMode } from '@static-doc/theme-utils'
import styles from './styles/related.css'

const Related: React.FC = () => {
  const currentPage = useCurrentPage()
  const { colorMode } = useColorMode()

  if (!currentPage || currentPage.data.related.length === 0) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Related</h4>
      <div className={styles.list}>
        {currentPage.data.related.map(page => (
          <Link href={page.route} key={page.route}>
            <a className={styles.item}>
              <h3 className={styles.pageName}>
                {page.icon && (
                  <img
                    src={page.icon[colorMode]}
                    alt=''
                    className={styles.icon}
                  />
                )}
                {page.data.name}
              </h3>
              {Boolean(page.data.description) && (
                <div className={styles.pageDescription}>
                  {page.data.description}
                </div>
              )}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Related
