import React from 'react'
import css from 'styled-jsx/css'

export const p: React.FC = (props) => {
  const { children } = props

  return (
    <p className="wrapper">
      {children}
      <style jsx>{styles}</style>
    </p>
  )
}

const styles = css`
  .wrapper {
    margin: var(--spacing-3) 0;
  }
`
