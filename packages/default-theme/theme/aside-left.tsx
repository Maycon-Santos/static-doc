import React from 'react'
import Logo from './logo'
import Socials from './socials'
import SearchBar from './search-bar'
import Menu from './menu'
import styles from './styles/aside-left.css'

const AsideLeft: React.FC = () => {
  return (
    <div className={styles.wrapper}>
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
