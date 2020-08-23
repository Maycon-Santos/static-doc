import React from 'react'
import styles from '../styles/markdown/list.css'

function listFactory (Element: React.ElementType): React.FC {
  return function List (props) {
    const { children } = props

    return (
      <Element className={styles.list}>
        {children}
      </Element>
    )
  }
}

export const ul = listFactory('ul')
export const ol = listFactory('ol')

export const li: React.FC = (props) => {
  const { children } = props

  return (
    <li className={styles.item}>
      {children}
    </li>
  )
}
