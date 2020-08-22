import React from 'react'
import { useSocials } from '@static-doc/theme-utils'
import BugsIcon from './vectors/bugs-icon'
import GithubIcon from './vectors/github-icon'

const Socials: React.FC = () => {
  const { repository } = useSocials()

  if (!repository) return null

  return (
    <div className="wrapper">
      <div className="list">
        <a href={repository.bugs()} className="item" target="_blank" rel="noreferrer">
          <BugsIcon />
        </a>
        <a href={repository.browse()} className="item" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </div>
      <style jsx>{`
        .list, .item {
          display: flex;
        }

        .item + .item {
          margin-left: var(--spacing-2);
        }

        .item :global(svg) {
          height: 22px;
        }

        :global(.light-mode) .item :global(svg) :global(path) {
          fill: var(--color-light-text-500);
        }

        :global(.dark-mode) .item :global(svg) :global(path) {
          fill: var(--color-dark-text-500);
        }  
      `}</style>
    </div>
  )
}

export default Socials
