import React from 'react'
import { useSocials, useCurrentPage, useColorMode } from '@static-doc/theme-utils'
import PencilIcon from './vectors/pencil-icon'
import MoonIcon from './vectors/moon-icon'
import SunIcon from './vectors/sun-icon'
import TableOfContents from './table-of-contents'
import styles from './styles/aside-right.css'

const AsideRight: React.FC = () => {
  const { repository } = useSocials()
  const currentPage = useCurrentPage()
  const { toggle, colorMode } = useColorMode()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {(currentPage && repository) && (
          <a
            href={repository.browse(currentPage.path)}
            target="_blank"
            rel="noreferrer"
            className={styles.editPageLink}
          >
            <PencilIcon />
            Edit this page
          </a>
        )}
        <button
          type="button"
          className={styles.colorModeSwitcher}
          onClick={toggle}
        >
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <TableOfContents />
    </div>
  )
}

export default AsideRight
