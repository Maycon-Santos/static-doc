import React from 'react'
import css from 'styled-jsx/css'

export const ul: React.FC = (props) => {
  const { children } = props

  return (
    <ul className="list">
      {children}
      <style jsx>{listStyles}</style>
    </ul>
  )
}

export const ol: React.FC = (props) => {
  const { children } = props

  return (
    <ol className="list">
      {children}
      <style jsx>{listStyles}</style>
    </ol>
  )
}

export const li: React.FC = (props) => {
  const { children } = props

  return (
    <li className="item">
      {children}
      <style jsx>{itemStyles}</style>
    </li>
  )
}

const listStyles = css`
  .list {
    padding-left: 30px;
    margin: var(--spacing-3) 0;
  }
`

const itemStyles = css`
  .item > :global(ul),
  .item > :global(ol) {
    margin: var(--spacing-1) 0;
  }
`
