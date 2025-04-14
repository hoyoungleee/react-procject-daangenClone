import React from 'react';
import styles from './SearchBox.module.scss';
const SearchBox = () => {
  return (
    <div className={styles.side}>
      <form>
        <button></button>
      </form>
      <div className={styles.showKeyword}></div>
    </div>
  );
};

export default SearchBox;
