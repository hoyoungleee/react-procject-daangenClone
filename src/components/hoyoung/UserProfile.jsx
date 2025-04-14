import React from 'react';
import styles from './UserProfile.module.scss';

const UserProfile = ({ post, user }) => {
  return (
    <div className={styles.userCard}>
      <img className={styles.avatar} src={user.avatar} alt='프로필' />
      <div>
        <div className={styles.top}>
          <span className={styles.nickname}>{user.nickname}</span>
          <span className={styles.temperature}>{user.temperature}°C</span>
        </div>
        <div className={styles.meta}>
          <span>{user.location}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
