import React from 'react';
import styles from './Category.module.scss';
import ImageList from './category/ImageList';

const Category = () => {
  return (
    <div className={styles.category}>
      <ul>
        <ImageList type='Bag' text='중고거래' />
        <ImageList type='Work' text='알바' />
        <ImageList type='House' text='부동산' />
        <ImageList type='Car' text='중고차' />
        <ImageList type='HomeTown' text='동네업체' />
        <ImageList type='News' text='동네생활' />
        <ImageList type='Crew' text='모임' />
      </ul>
    </div>
  );
};

export default Category;
