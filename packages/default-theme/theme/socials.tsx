import React from 'react'
import { useSocials } from '@static-doc/theme-utils'
import BugsIcon from './vectors/bugs-icon'
import GithubIcon from './vectors/github-icon'
import styles from './styles/socials.css'

const Socials: React.FC = () => {
  const { repository } = useSocials()

  if (!repository) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <a
          href={repository.bugs()}
          className={styles.item}
          target='_blank'
          rel='noreferrer'
          title='bugs'
        >
          Bugs
          <BugsIcon />
        </a>
        <a
          href={repository.browse()}
          className={styles.item}
          target='_blank'
          rel='noreferrer'
          title='Repository'
        >
          Repository
          <GithubIcon />
        </a>
      </div>
    </div>
  )
}

export default Socials
