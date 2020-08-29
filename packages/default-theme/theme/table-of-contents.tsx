import React from 'react'
import { useHeading } from '@static-doc/theme-utils'
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './styles/table-of-contents.css'

const TableOfContents: React.FC = () => {
  const { items } = useHeading()

  if (items.length === 0) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Table of contents</h4>
      <Scrollbars universal autoHide tagName='ul' className={styles.list}>
        {items.map((item: any) => {
          return (
            <li
              key={item.id}
              className={[styles.item, styles[`level-${item.level}`]].join(' ')}
            >
              <a href={`#${item.id}`} className={styles.itemLink}>
                {item.content}
              </a>
            </li>
          )
        })}
      </Scrollbars>
    </div>
  )
}

export default TableOfContents
