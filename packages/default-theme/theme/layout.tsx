import React, { useEffect } from 'react'
import AsideLeft from './aside-left'
import AsideRight from './aside-right'
import styles from './styles/layout.css'

const Layout: React.FC = (props) => {
  const { children } = props

  const resetHash = () => {
    history.pushState('', document.title, window.location.pathname + window.location.search)
  }

  useEffect(() => {
    window.addEventListener('mousedown', resetHash)
    return () => window.removeEventListener('mousedown', resetHash)
  }, [])

  return (
    <div className={styles.wrapper}>
      <AsideLeft />
      <main className={styles.main}>
        {children}
      </main>
      <AsideRight />
    </div>
  )
}

export default Layout
