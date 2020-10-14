import React from 'react'
import Link from 'next/link'
import { useCurrentPage } from '@static-doc/theme-utils'
import styles from './styles/related.css'

const Related: React.FC = () => {
  const { data } = useCurrentPage()

  if (data.related.length === 0) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Related</h4>
      <div className={styles.list}>
        {data.related.map(page => (
          <Link href={page.route} key={page.route}>
            <a className={styles.item}>
              <h3 className={styles.pageName}>{page.data.name}</h3>
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
