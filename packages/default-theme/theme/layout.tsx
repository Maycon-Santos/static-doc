import React, { useEffect, useRef } from 'react'
import AsideLeft from './aside-left'
import AsideRight from './aside-right'
import MobileNavButtons from './mobile-nav-buttons'
import styles from './styles/layout.css'

const Layout: React.FC = props => {
  const { children } = props
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('mousedown', resetHash)
    wrapperRef.current.scrollTo(window.innerWidth / 2, 0)
    return () => {
      window.removeEventListener('mousedown', resetHash)
    }
  }, [])

  const resetHash = () => {
    history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    )
  }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <MobileNavButtons layoutRef={wrapperRef} mainRef={mainRef} />
      <AsideLeft />
      <main className={styles.main} ref={mainRef}>
        {children}
      </main>
      <AsideRight />
    </div>
  )
}

export default Layout
