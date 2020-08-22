import React from 'react'
import css from 'styled-jsx/css'
import Logo from './logo'
import Socials from './socials'
import SearchBar from './search-bar'
import Menu from './menu'

const AsideLeft: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header-item">
          <Logo />
        </div>
        <div className="header-item">
          <Socials />
        </div>
      </div>
      <SearchBar />
      <Menu />
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .wrapper {
    flex: 0 0 250px;
    margin-top: var(--spacing-4);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: calc(var(--spacing-2) * -1);
  }

  .header-item {
    margin: var(--spacing-2);
  }
`

export default AsideLeft
