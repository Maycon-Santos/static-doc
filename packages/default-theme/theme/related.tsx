import React from 'react'
import Link from 'next/link'
import { useCurrentPage, useColorMode } from '@static-doc/theme-utils'
import styles from './styles/related.css'

const Related: React.FC = () => {
  const { data } = useCurrentPage()
  const { colorMode } = useColorMode()

  if (data.related.length === 0) {
    return null
  }

  console.log(data)

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Related</h4>
      <div className={styles.list}>
        {data.related.map(page => (
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
