import React from 'react';
import styles from './CommentSpace.module.scss';
import UserProfile from './UserProfile';
import GrayThumbButton from './GrayThumbButton';
import GrayCommentButton from './GrayCommentButton';

const CommentSpace = ({ comment, user }) => {
  return (
    <div key={comment.id} className={styles.comment}>
      <UserProfile post={comment} user={user} />
      <p>{comment.content}</p>
      <div className={styles.info}>
        <span>
          <GrayThumbButton />
        </span>
        &nbsp;
        {comment.likes}
        &nbsp; &nbsp;
        <span>
          <GrayCommentButton />
        </span>
        &nbsp;
        {comment.length}
      </div>
    </div>
  );
};

export default CommentSpace;
