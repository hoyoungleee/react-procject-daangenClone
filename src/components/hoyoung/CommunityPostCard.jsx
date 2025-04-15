import styles from './CommunityPostCard.module.scss';
import { Link } from 'react-router-dom';
import { comments } from '../../assets/community-dummy-comment';
import GrayCommentButton from './GrayCommentButton';
import GrayThumbButton from './GrayThumbButton';

const PostCard = ({ post }) => {
  const foundComments = comments.filter((c) => c.parent_id === +post.id);
  function formatRelativeDate(realDateStr) {
    const realDate = new Date(realDateStr);
    const now = new Date();

    const diffMs = now - realDate;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffDay > 0) return `${diffDay}일 전`;
    if (diffHour > 0) return `${diffHour}시간 전`;
    if (diffMin > 0) return `${diffMin}분 전`;
    return `방금 전`;
  }
  const date = formatRelativeDate(post.realDate); 

  return (
    <Link to={`/community/${post.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.content}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{post.location}</span>·
          <span className={styles.date}>{post.category}</span>·
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.info}>
          <span>
            <GrayThumbButton />
          </span>
          &nbsp;
          {post.likes}
          &nbsp; &nbsp;
          <span>
            <GrayCommentButton />
          </span>
          &nbsp;
          {foundComments.length}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
