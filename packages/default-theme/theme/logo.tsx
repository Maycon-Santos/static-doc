import React from 'react'
import { useLogo } from '@static-doc/theme-utils'
import styles from './styles/logo.css'

const Logo: React.FC = () => {
  const { image, text } = useLogo()

  return (
    <div className={styles.wrapper}>
      {image ? (
        <img src={image} alt={text} className={styles.image} />
      ) : (
        <span className={styles.text}>{text}</span>
      )}
    </div>
  )
}

export default Logo
