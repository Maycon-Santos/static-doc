import React, { useEffect, useState, useRef } from 'react'
import { isMobile as checkIsMobile } from 'react-device-detect'
import AsideLeft from './aside-left'
import AsideRight from './aside-right'
import MobileNavButtons from './mobile-nav-buttons'
import styles from './styles/layout.css'

const Layout: React.FC = props => {
  const { children } = props
  const [isMobile, setIsMobile] = useState<Boolean>(true)
  const [hasScrollX, setHasScrollX] = useState<Boolean>()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMobile(checkIsMobile)
    checkHasScrollX()
    window.addEventListener('mousedown', resetHash)
    window.addEventListener('resize', checkHasScrollX)
    return () => {
      window.removeEventListener('mousedown', resetHash)
      window.removeEventListener('resize', checkHasScrollX)
    }
  }, [])

  const checkHasScrollX = () => {
    const { current: wrapperElement } = wrapperRef
    const { clientWidth, scrollWidth } = wrapperElement
    setHasScrollX(clientWidth !== scrollWidth)
  }

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
        overflowX: isMobile ? 'auto' : hasScrollX ? 'hidden' : 'initial',
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
