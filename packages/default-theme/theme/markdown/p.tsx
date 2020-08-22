import React from 'react'

export const p: React.FC = (props) => {
  const { children } = props

  return (
    <p className="wrapper">
      {children}
      <style jsx>{`
        .wrapper {
          margin: var(--spacing-3) 0;
        }
      `}</style>
    </p>
  )
}
