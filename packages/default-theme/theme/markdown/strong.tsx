import React from 'react'
import styles from '../styles/markdown/strong.css'

export const strong: React.FC = props => {
  const { children } = props

  return <strong className={styles.strong}>{children}</strong>
}
