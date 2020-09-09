import React from 'react'
import styles from '../styles/markdown/a.css'

export const a: React.FC = props => {
  const { children, ...rest } = props

  return (
    <a {...rest} className={styles.anchor}>
      {children}
    </a>
  )
}
