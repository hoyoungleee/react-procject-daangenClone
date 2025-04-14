import React from 'react';
import { CategoryImages } from './CategoryImages';
import styles from './ImageList.module.scss';

const ImageList = ({ type, text }) => {
  return (
    <li>
      <div className={styles.imageDiv}>
        {CategoryImages[type]}
        {text}
      </div>
    </li>
  );
};

export default ImageList;
