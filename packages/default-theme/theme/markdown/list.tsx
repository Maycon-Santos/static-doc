import React from 'react'

function listFactory (Element: React.ElementType): React.FC {
  return function List (props) {
    const { children } = props

    return (
      <Element className="list">
        {children}
        <style jsx>{`
          .list {
            padding-left: 30px;
            margin: var(--spacing-3) 0;
          }
        `}</style>
      </Element>
    )
  }
}

export const ul = listFactory('ul')
export const ol = listFactory('ol')

export const li: React.FC = (props) => {
  const { children } = props

  return (
    <li className="item">
      {children}
      <style jsx>{`
        .item > :global(ul),
        .item > :global(ol) {
          margin: var(--spacing-1) 0;
        }
      `}</style>
    </li>
  )
}
