import React from 'react'
import SearchIcon from './vectors/search-icon'

const SearchBar: React.FC = () => {
  return (
    <div className="wrapper">
      <input className="input form-control" type="text" required />
      <span className="placeholder">Search</span>
      <button className="button form-control" type="button">
        <SearchIcon />
      </button>
      <style jsx>{`
        .wrapper {
          position: relative;
          margin-top: var(--spacing-3);
        }

        .wrapper :global(input),
        .wrapper :global(button) {
          outline: none;
        }

        .input {
          width: 100%;
          height: 48px;
          box-sizing: border-box;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid;
          border-radius: 24px;
          color: var(--color-light-text-400);
          font-size: var(--font-size-2);
          font-weight: var(--font-weight-semi-bold);
          padding: var(--spacing-2) var(--spacing-5) var(--spacing-2) var(--spacing-3);
        }

        :global(.light-mode) .input {
          border-color: var(--color-light-gray-500);
        }

        :global(.light-mode) .input:focus {
          color: var(--color-light-text-500);
          border-color: var(--color-light-gray-700);
        }

        :global(.dark-mode) .input {
          border-width: 2px;
          border-color: var(--color-dark-gray-300);
          background-color: var(--color-dark-gray-300);
        }

        :global(.dark-mode) .input:focus {
          color: var(--color-dark-text-500);
          border-color: var(--color-dark-gray-500);
        }

        .input:valid + .placeholder {
          display: none;
        }

        .placeholder {
          position: absolute;
          left: 16px;
          font-size: var(--font-size-2);
          font-weight: var(--font-weight-semi-bold);
          line-height: 48px;
          pointer-events: none;
        }

        :global(.light-mode) .placeholder {
          color: var(--color-light-text-400);
        }

        :global(.dark-mode) .placeholder {
          color: var(--color-dark-text-400);
        }

        .button {
          position: absolute;
          right: 8px;
          top: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          border: none;
          cursor: pointer;
          box-sizing: border-box;
          border-radius: 50%;
        }

        .button :global(svg) {
          width: 16px;
        }

        .button :global(svg) :global(path) {
          fill: white;
        }

        :global(.light-mode) .button {
          background-color: var(--color-light-primary-500);
        }

        :global(.dark-mode) .button {
          background-color: var(--color-dark-primary-500);
        }

        :global(.light-mode) .button:hover {
          background-color: var(--color-light-primary-600);
        }

        :global(.dark-mode) .button:hover {
          background-color: var(--color-dark-primary-600);
        }
      `}</style>
    </div>
  )
}

export default SearchBar
