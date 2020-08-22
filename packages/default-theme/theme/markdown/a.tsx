import React from 'react'

export const a: React.FC = (props) => {
  const { children, ...rest } = props

  return (
    <a {...rest} className="wrapper">
      {children}
      <style jsx>{`
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
      `}</style>
    </a>
  )
}
