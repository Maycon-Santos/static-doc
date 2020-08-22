import React from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import { useMenu, useCurrentPage, useColorMode, useAsset } from 'static-doc/theme-utils'

const Menu: React.FC = () => {
  const menuTree = useMenu()
  const currentPage = useCurrentPage()
  const { colorMode } = useColorMode()

  return (
    <div className="wrapper">
      {Object.keys(menuTree).map(menu => {
        const pages = menuTree[menu]

        return (
          <div key={menu} className="nav-group">
            {menu && <h3 className="nav-name">{menu}</h3>}
            <ul className="nav-list">
              {pages.map(page => {
                const activeClassName = currentPage && (page.route === currentPage.route ? 'active' : '')
                const anchorClassName = ['nav-link', activeClassName].join(' ')
                const iconSrc = page.icon && useAsset(page.icon[colorMode])

                const Child: React.FC = () => (
                  <>
                    {iconSrc && <img src={iconSrc} alt="" className="icon" />}
                    {page.data.name}
                  </>
                )

                return (
                  <li key={page.route} className="nav-item">
                    {page.isExternalLink ? (
                      <a href={page.route} target="_blank" rel="noreferrer" className={anchorClassName}>
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
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .wrapper {
    margin-top: var(--spacing-3);
  }

  .nav-name {
    margin-top: var(--spacing-3);
    margin-bottom: var(--spacing-2);
    font-size: var(--font-size-3);
  }

  :global(.light-mode) .nav-name {
    color: var(--color-light-primary-600);
  }

  :global(.dark-mode) .nav-name {
    color: var(--color-dark-primary-600);
  }

  .nav-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 42px;
    box-sizing: border-box;
    border-radius: 24px;
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-semi-bold);
    text-decoration: none;
    transition: padding 300ms 150ms, background 300ms;
  }

  .nav-link:hover,
  .nav-link.active {
    padding: 0 var(--spacing-3);
    transition: padding 300ms, background 300ms;
  }

  :global(.light-mode) .nav-link {
    color: var(--color-light-gray-700);
  }

  :global(.dark-mode) .nav-link {
    color: var(--color-dark-gray-700);
  }

  :global(.light-mode) .nav-link:hover,
  :global(.light-mode) .nav-link.active {
    color: var(--color-light-text-500);
  }

  :global(.dark-mode) .nav-link:hover,
  :global(.dark-mode) .nav-link.active {
    color: var(--color-dark-text-500);
  }

  :global(.light-mode) .nav-link.active {
    background-color: var(--color-light-gray-400);
  }

  :global(.dark-mode) .nav-link.active {
    background-color: var(--color-dark-gray-400);
  }

  .icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
    object-position: center;
    margin-right: var(--spacing-2);
  }
`

export default Menu
