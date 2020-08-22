import React, { useEffect } from 'react'
import css from 'styled-jsx/css'
import AsideLeft from './aside-left'
import AsideRight from './aside-right'

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
    <div className="wrapper">
      <AsideLeft />
      <main className="main">
        {children}
      </main>
      <AsideRight />
      <style jsx>{styles}</style>
      <style jsx>{globalStyles}</style>
    </div>
  )
}

const styles = css`
  .wrapper {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-3);
  }

  .main {
    flex: 1;
    padding: var(--spacing-4) var(--spacing-4) 0 var(--spacing-4);
  }

  .main > :global(:nth-child(1)) {
    margin-top: 0;
  }
`

const globalStyles = css.global`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: var(--spacing-3);
    line-height: var(--line-height-body);
  }

  .light-mode {
    color: var(--color-light-text-500);
    background: var(--color-light-background);
  }

  .dark-mode {
    color: var(--color-dark-text-500);
    background: var(--color-dark-background);
  }
`

export default Layout
