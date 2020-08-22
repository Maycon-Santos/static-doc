import React from 'react'
import css from 'styled-jsx/css'

export const em: React.FC = (props) => {
  const { children } = props

  return (
    <em className="wrapper">
      {children}
      <style jsx>{styles}</style>
    </em>
  )
}

const styles = css`
  .wrapper {
    font-style: italic;
  }
`
