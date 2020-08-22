import React from 'react'

export const strong: React.FC = (props) => {
  const { children } = props

  return (
    <strong className="wrapper">
      {children}
      <style jsx>{`
        .wrapper {
          font-weight: var(--font-weight-semi-bold);
        }
      `}</style>
    </strong>
  )
}
