import React from 'react'
import SearchIcon from './vectors/search-icon'
import styles from './styles/search-bar.css'

const SearchBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" required />
      <span className={styles.placeholder}>Search</span>
      <button className={styles.button} type="button">
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar
