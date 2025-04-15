import styles from './CommunityPostCard.module.scss';
import { Link } from 'react-router-dom';
import { comments } from '../../assets/community-dummy-comment';
import GrayCommentButton from './GrayCommentButton';
import GrayThumbButton from './grayThumbButton';

const PostCard = ({ post }) => {
  const foundComments = comments.filter((c) => c.parent_id === +post.id);
  return (
    <Link to={`/community/${post.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.content}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{post.location}</span>·
          <span className={styles.date}>{post.category}</span>·
          <span className={styles.date}>{post.date}</span>
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
