import React from 'react';
import styles from './SearchBar.module.scss';
import SearchBox from './search_bar/SearchBox';
import SearchButton from './search_bar/SearchButton';
const SearchBar = () => {
  return (
    <div className={styles.merong}>
      <SearchButton />
      <SearchBox />
    </div>
  );
};

export default SearchBar;
