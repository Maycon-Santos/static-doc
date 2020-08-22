import React from 'react'
import css from 'styled-jsx/css'

export const strong: React.FC = (props) => {
  const { children } = props

  return (
    <strong className="wrapper">
      {children}
      <style jsx>{styles}</style>
    </strong>
  )
}

const styles = css`
  .wrapper {
    font-weight: var(--font-weight-semi-bold);
  }
`
