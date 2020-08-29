import React from 'react'
import SearchIcon from './vectors/search-icon'
import styles from './styles/search-bar.css'

const SearchBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <label>
        <input className={styles.input} type='text' required />
        <span className={styles.placeholder}>Search</span>
      </label>
      <button className={styles.button} type='button' title='Start search'>
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar
