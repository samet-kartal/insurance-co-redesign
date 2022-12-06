import React from 'react';
import classes from './header.module.scss';
import SearchIcon from '../../components/search-icon';

function Header() {
  return (
    <header className={classes.headerContainer}>
      <div className={classes.searchInputContainer}>
        <SearchIcon className={classes.searchIcon} />
        <input
          className={classes.searchInput}
          type="text"
          placeholder="SEARCH (Client Name / Policy Number)"
        />
      </div>
    </header>
  );
}

export default Header;
