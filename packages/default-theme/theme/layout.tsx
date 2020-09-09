import React, { useEffect, useState, useRef } from 'react'
import { isMobile as _isMobile } from 'react-device-detect'
import AsideLeft from './aside-left'
import AsideRight from './aside-right'
import MobileNavButtons from './mobile-nav-buttons'
import styles from './styles/layout.css'

const Layout: React.FC = props => {
  const { children } = props
  const [isMobile, setIsMobile] = useState(true)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('mousedown', resetHash)
    setIsMobile(_isMobile)
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
    <div
      className={styles.wrapper}
      ref={wrapperRef}
      style={{
        overflowX: isMobile ? 'auto' : 'hidden',
        scrollSnapType: isMobile ? 'x mandatory' : 'none'
      }}
    >
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
