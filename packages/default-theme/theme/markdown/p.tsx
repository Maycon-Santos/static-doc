import React from 'react'
import styles from '../styles/markdown/p.css'

export const p: React.FC = (props) => {
  const { children } = props

  return (
    <p className={styles.paragraph}>
      {children}
    </p>
  )
}
