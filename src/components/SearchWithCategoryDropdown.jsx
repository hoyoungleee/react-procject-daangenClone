import { FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './SearchWithCategoryDropdown.module.scss';

const SearchWithCategoryDropdown = ({ searchInputRef, showSearchButton }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('중고거래');
  const navigate = useNavigate();
  const handleSearch = () => {
    const query = searchInputRef.current?.value.trim();
    if (!query) return;

    navigate(
      `/used-items?keyword=${encodeURIComponent(query)}&category=${encodeURIComponent(selectedCategory)}`,
    );
  };

  const categories = [
    '중고거래',
    '부동산',
    '중고차',
    '알바',
    '동네업체',
    '동네생활',
    '모임',
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.searchInputWrapper}>
      <div className={styles.categorySelector} onClick={toggleDropdown}>
        <div className={styles.categoryButton}>
          <span className={styles.categorys}>{selectedCategory}</span>
          <FaCaretDown className={styles.facaret} />
        </div>
        {isDropdownOpen && (
          <ul className={styles.dropdownMenu}>
            {categories.map((category) => (
              <li
                key={category}
                className={styles.dropdownItem}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        ref={searchInputRef}
        type='text'
        placeholder='검색어를 입력해주세요'
        className={styles.searchInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />

      {showSearchButton && (
        <button className={styles.showSearchButton} onClick={handleSearch}>
          <FaArrowRight className={styles.showSearchButtonIcon} />
        </button>
      )}
    </div>
  );
};

export default SearchWithCategoryDropdown;
