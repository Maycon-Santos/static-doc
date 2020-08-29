import React, { useState, useEffect } from 'react'
import MenuIcon from './vectors/menu-icon'
import TextIcon from './vectors/text-icon'
import ArrowRightIcon from './vectors/arrow-right-icon'
import ArrowLeftIcon from './vectors/arrow-left-icon'
import styles from './styles/mobile-nav-buttons.css'

type Props = {
  layoutRef: React.MutableRefObject<HTMLDivElement>
  mainRef: React.MutableRefObject<HTMLDivElement>
}

const MobileNavButtons: React.FC<Props> = props => {
  const [scrollX, setScrollX] = useState(0)
  const { layoutRef, mainRef } = props

  const scrollXLimit = layoutRef?.current?.scrollWidth - global?.innerWidth || 0
  const scrollXHalf = scrollXLimit / 2

  const leftProgress = 1 - Math.min(scrollX / scrollXHalf, 1) || 0
  const rightProgress = Math.max(scrollX - scrollXHalf, 0) / scrollXHalf || 0

  const scrollTo = (direction: 'right' | 'left') => () => {
    if (direction === 'right' && scrollX > 0) {
      layoutRef.current.scrollTo(scrollXLimit, 0)
    }

    if (direction === 'left' && scrollX < scrollXLimit) {
      layoutRef.current.scrollTo(0, 0)
    }

    layoutRef.current.scrollTo(scrollXHalf, 0)
  }

  const getStyles = progress => {
    return {
      borderRadius: `${Math.max(5, progress * 70)}px`,
      transform: `scale(${1 - progress}, ${1 - progress})`
    }
  }

  const updateScrollX = () => setScrollX(layoutRef.current.scrollLeft)

  const reset = () => {
    layoutRef.current.scrollTo(scrollXHalf, 0)
    setScrollX(scrollXHalf)
  }

  useEffect(() => {
    layoutRef.current.addEventListener('scroll', updateScrollX)
  }, [layoutRef.current])

  useEffect(() => {
    const progress = leftProgress + rightProgress

    if (window.innerWidth >= 1200) {
      mainRef.current.style.opacity = '1'
      document.body.style.overflow = 'initial'
    } else {
      mainRef.current.style.opacity = Math.max(0.3, 1 - progress).toString()
      document.body.style.overflow = Math.round(progress) ? 'hidden' : 'initial'
    }
  }, [scrollX])

  useEffect(() => {
    window.addEventListener('resize', reset)
    return () => window.removeEventListener('resize', reset)
  }, [scrollX])

  return (
    <>
      <button
        type='button'
        className={`${styles.navButton} ${styles.left}`}
        onClick={scrollTo('left')}
        style={getStyles(leftProgress)}
        title='Open menu'
      >
        <MenuIcon style={{ opacity: 1 - rightProgress }} />
        <ArrowLeftIcon style={{ opacity: rightProgress }} />
      </button>
      <button
        type='button'
        className={`${styles.navButton} ${styles.right}`}
        onClick={scrollTo('right')}
        style={getStyles(rightProgress)}
        title='Switch color mode and see the table of contents'
      >
        <TextIcon style={{ opacity: 1 - leftProgress }} />
        <ArrowRightIcon style={{ opacity: leftProgress }} />
      </button>
    </>
  )
}

export default MobileNavButtons
