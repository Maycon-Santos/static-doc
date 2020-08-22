import React from 'react'

export const blockquote: React.FC = (props) => {
  const { children } = props

  return (
    <blockquote className="wrapper">
      {children}
      <style jsx>{`
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
      `}</style>
    </blockquote>
  )
}
