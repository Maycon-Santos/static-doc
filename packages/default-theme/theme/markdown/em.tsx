import React from 'react'
import styles from '../styles/markdown/em.css'

export const em: React.FC = props => {
  const { children } = props

  return <em className={styles.em}>{children}</em>
}
