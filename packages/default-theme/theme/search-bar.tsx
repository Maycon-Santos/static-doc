import React from 'react'
import SearchIcon from './vectors/search-icon'
import styles from './styles/search-bar.css'

type Props = {
  search: string
  setSearch: (text: string) => void
}

const SearchBar: React.FC<Props> = props => {
  const { search, setSearch } = props

  return (
    <div className={styles.wrapper}>
      <label>
        <input
          className={styles.input}
          type='text'
          required
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <span className={styles.placeholder}>Search</span>
      </label>
      <button className={styles.button} type='button' title='Start search'>
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar
