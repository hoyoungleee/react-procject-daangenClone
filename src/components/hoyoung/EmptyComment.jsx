import React from 'react';
import styles from './EmptyComment.module.scss';

const EmptyComment = () => {
  return (
    <div className={styles.emptyComment}>
      <p>아직 댓글이 없어요</p>
      <p>가장 먼저 댓글을 남겨보세요.</p>
      <button className={styles.writeBtn}>댓글 쓰기</button>
    </div>
  );
};

export default EmptyComment;
