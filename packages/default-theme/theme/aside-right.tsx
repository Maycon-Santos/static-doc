import React from 'react'
import css from 'styled-jsx/css'
import { useSocials, useCurrentPage, useColorMode } from 'static-doc/theme-utils'
import PencilIcon from './vectors/pencil-icon'
import MoonIcon from './vectors/moon-icon'
import SunIcon from './vectors/sun-icon'
import TableOfContents from './table-of-contents'

const AsideRight: React.FC = () => {
  const { repository } = useSocials()
  const { path } = useCurrentPage()
  const { toggle, colorMode } = useColorMode()

  return (
    <div className="wrapper">
      <div className="header">
        <a
          href={repository.browse(path)}
          target="_blank"
          rel="noreferrer"
          className="edit-page-link"
        >
          <PencilIcon />
          Edit this page
        </a>
        <button
          type="button"
          className="color-mode-switcher"
          onClick={toggle}
        >
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <TableOfContents />
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .wrapper {
    flex: 0 0 250px;
    margin-top: var(--spacing-4);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .edit-page-link {
    display: flex;
    align-items: center;
    border-width: 1px 0 1px 0;
    border-color: transparent;
    border-style: solid;
    text-decoration: none;
    font-size: var(--font-size-2);
  }

  .edit-page-link :global(svg) {
    width: 14px;
    margin-right: var(--spacing-2);
  }

  :global(.light-mode) .edit-page-link :global(svg) :global(path) {
    fill: var(--color-light-primary-500);
  }

  :global(.dark-mode) .edit-page-link :global(svg) :global(path) {
    fill: var(--color-dark-primary-500);
  }

  :global(.light-mode) .edit-page-link {
    color: var(--color-light-primary-500);
  }

  :global(.dark-mode) .edit-page-link {
    color: var(--color-dark-primary-500);
  }

  :global(.light-mode) .edit-page-link:hover {
    border-bottom-color: var(--color-light-primary-500);
  }

  :global(.dark-mode) .edit-page-link:hover {
    border-bottom-color: var(--color-dark-primary-500);
  }

  .color-mode-switcher {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .color-mode-switcher :global(svg) {
    width: 18px;
  }

  :global(.light-mode) .color-mode-switcher {
    background-color: var(--color-light-gray-300);
  }

  :global(.dark-mode) .color-mode-switcher {
    background-color: var(--color-dark-gray-500);
  }

  :global(.light-mode) .color-mode-switcher:hover {
    background-color: var(--color-light-gray-500);
  }

  :global(.dark-mode) .color-mode-switcher:hover {
    background-color: var(--color-dark-gray-600);
  }

  :global(.light-mode) .color-mode-switcher :global(svg) :global(path) {
    fill: var(--color-light-text-500);
  }

  :global(.dark-mode) .color-mode-switcher :global(svg) :global(path) {
    fill: var(--color-dark-text-500);
  }
`

export default AsideRight
