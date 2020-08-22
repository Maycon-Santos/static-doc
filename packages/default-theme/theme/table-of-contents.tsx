import React from 'react'
import css from 'styled-jsx/css'
import { useHeading } from 'static-doc/theme-utils'

const TableOfContents: React.FC = () => {
  const { items } = useHeading()

  return (
    <div className="wrapper">
      <h4 className="title">Table of contents</h4>
      <ul className="list">
        {items.map((item: any) => {
          return (
            <li key={item.id} className={`item level-${item.level}`}>
              <a href={`#${item.id}`} className="item-link">
                {item.content}
              </a>
            </li>
          )
        })}
      </ul>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .wrapper {
    margin-top: var(--spacing-4);
  }

  .title {
    margin-top: 0;
    margin-bottom: var(--spacing-2);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-bold);
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .item.level-2 {
    padding-left: var(--spacing-2);
  }

  .item.level-3 {
    padding-left: calc(var(--spacing-2) * 2);
  }

  .item.level-4 {
    padding-left: calc(var(--spacing-2) * 3);
  }

  .item.level-5 {
    padding-left: calc(var(--spacing-2) * 4);
  }

  .item.level-6 {
    padding-left: calc(var(--spacing-2) * 5);
  }

  .item + .item {
    margin-top: var(--spacing-1);
  }

  .item-link {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-semi-bold);
    text-decoration: none;
  }

  :global(.light-mode) .item-link {
    color: var(--color-light-text-400);
  }

  :global(.light-mode) .item-link:hover {
    color: var(--color-light-primary-600);
  }

  :global(.dark-mode) .item-link {
    color: var(--color-dark-text-400);
  }

  :global(.dark-mode) .item-link:hover {
    color: var(--color-dark-primary-600);
  }
`

export default TableOfContents
