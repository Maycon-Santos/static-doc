import React from 'react'
import styles from '../styles/markdown/img.css'

export const img: React.FC = (props) => {
  const { ...rest } = props

  return (
    <img alt="" {...rest} className={styles.image} />
  )
}
