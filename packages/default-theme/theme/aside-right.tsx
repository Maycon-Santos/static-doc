import React, { useState, useEffect } from 'react'
import {
  useSocials,
  useCurrentPage,
  useColorMode
} from '@static-doc/theme-utils'
import PencilIcon from './vectors/pencil-icon'
import MoonIcon from './vectors/moon-icon'
import SunIcon from './vectors/sun-icon'
import TableOfContents from './table-of-contents'
import styles from './styles/aside-right.css'

const AsideRight: React.FC = () => {
  const [translationY, setTranslationY] = useState(0)
  const { repository } = useSocials()
  const currentPage = useCurrentPage()
  const { toggle, colorMode } = useColorMode()

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
        {currentPage && repository && (
          <a
            href={repository.browse(currentPage.path)}
            target='_blank'
            rel='noreferrer'
            className={styles.editPageLink}
          >
            <PencilIcon />
            Edit this page
          </a>
        )}
        <button
          type='button'
          className={styles.colorModeSwitcher}
          onClick={toggle}
          title='Switch color mode'
        >
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <TableOfContents />
    </div>
  )
}

export default AsideRight
