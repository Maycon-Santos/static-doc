import React from 'react'
import css from 'styled-jsx/css'

export const a: React.FC = (props) => {
  const { children, ...rest } = props

  return (
    <a {...rest} className="wrapper">
      {children}
      <style jsx>{styles}</style>
    </a>
  )
}

const styles = css`
  .wrapper {
    text-decoration: none;
  }

  .wrapper:hover {
    text-decoration: underline;
  }

  :global(.light-mode) .wrapper {
    color: var(--color-light-primary-600);
  }

  :global(.dark-mode) .wrapper {
    color: var(--color-dark-primary-600);
  }
`
