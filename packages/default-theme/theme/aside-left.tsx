import React, { useEffect, useState } from 'react'
import Logo from './logo'
import Socials from './socials'
import SearchBar from './search-bar'
import Menu from './menu'
import styles from './styles/aside-left.css'

const AsideLeft: React.FC = () => {
  const [translationY, setTranslationY] = useState(0)

  const resolveTranslationY = () => {
    if (window.innerWidth >= 1200) {
      setTranslationY(0)
    } else {
      setTranslationY(window.scrollY)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', resolveTranslationY)
    return () => {
      window.removeEventListener('scroll', resolveTranslationY)
    }
  }, [])

  return (
    <div
      className={styles.wrapper}
      style={{ transform: `translateY(${translationY}px)` }}
    >
      <div className={styles.header}>
        <div className={styles.headerItem}>
          <Logo />
        </div>
        <div className={styles.headerItem}>
          <Socials />
        </div>
      </div>
      <SearchBar />
      <Menu />
    </div>
  )
}

export default AsideLeft
