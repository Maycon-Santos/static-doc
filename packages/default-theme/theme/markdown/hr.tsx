import React from 'react'
import css from 'styled-jsx/css'

export const hr: React.FC = () => {
  return (
    <>
      <hr className="separator" />
      <style jsx>{styles}</style>
    </>
  )
}

const styles = css`
  .separator {
    border-style: solid;
  }

  :global(.light-mode) .separator {
    border-color: var(--color-light-text-400);
  }

  :global(.dark-mode) .separator {
    border-color: var(--color-dark-text-400);
  }
`
