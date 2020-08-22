import React from 'react'
import css from 'styled-jsx/css'

export const blockquote: React.FC = (props) => {
  const { children } = props

  return (
    <blockquote className="wrapper">
      {children}
      <style jsx>{styles}</style>
    </blockquote>
  )
}

const styles = css`
  .wrapper {
    border-left: 4px solid;
    padding: var(--spacing-0) 0 var(--spacing-0) var(--spacing-3);
    margin: var(--spacing-3) 0;
  }

  :global(.light-mode) .wrapper {
    color: var(--color-light-text-400);
    border-color: var(--color-light-text-400);
  }

  :global(.dark-mode) .wrapper {
    color: var(--color-dark-text-400);
    border-color: var(--color-dark-text-400);
  }
`
