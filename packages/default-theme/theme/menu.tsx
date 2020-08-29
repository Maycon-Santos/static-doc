import React from 'react'
import Link from 'next/link'
import {
  useMenu,
  useCurrentPage,
  useColorMode,
  useAsset
} from '@static-doc/theme-utils'
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './styles/menu.css'

const Menu: React.FC = () => {
  const menuTree = useMenu()
  const currentPage = useCurrentPage()
  const { colorMode } = useColorMode()

  return (
    <Scrollbars universal autoHide className={styles.wrapper}>
      {Object.keys(menuTree).map(menu => {
        const pages = menuTree[menu]

        return (
          <div key={menu} className={styles.navGroup}>
            {menu && <h3 className={styles.navName}>{menu}</h3>}
            <ul className={styles.navList}>
              {pages.map((page: any) => {
                const activeClassName =
                  currentPage &&
                  (page.route === currentPage.route ? styles.active : '')
                const anchorClassName = [styles.navLink, activeClassName].join(
                  ' '
                )
                const iconSrc = page.icon && useAsset(page.icon[colorMode])

                const Child: React.FC = () => (
                  <>
                    {iconSrc && (
                      <img src={iconSrc} alt='' className={styles.icon} />
                    )}
                    {page.data.name}
                  </>
                )

                return (
                  <li key={page.route}>
                    {page.isExternalLink ? (
                      <a
                        href={page.route}
                        target='_blank'
                        rel='noreferrer'
                        className={anchorClassName}
                      >
                        <Child />
                      </a>
                    ) : (
                      <Link href={page.route}>
                        <a className={anchorClassName}>
                          <Child />
                        </a>
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </Scrollbars>
  )
}

export default Menu
