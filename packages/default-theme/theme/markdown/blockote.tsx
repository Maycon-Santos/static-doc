import React from 'react'
import styles from '../styles/markdown/blockquote.css'

export const blockquote: React.FC = props => {
  const { children } = props

  return <blockquote className={styles.blockquote}>{children}</blockquote>
}
