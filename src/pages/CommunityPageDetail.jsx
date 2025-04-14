import React from 'react';
import styles from './CommunityPageDetail.module.scss';
import { useParams } from 'react-router-dom';
import { posts } from '../assets/community-dummy-data';
import { users } from '../assets/community-dummy-user';
import { comments } from '../assets/community-dummy-comment';
import UserProfile from '../components/hoyoung/UserProfile';
import ThumbButton from '../components/hoyoung/ThumbButton';
import CommentButton from '../components/hoyoung/CommentButton';
import BookMarkButton from '../components/hoyoung/BookMarkButton';

const CommunityPageDetail = () => {
  // 지금 상세보기 페이지의 postId값을 URL로부터 읽어와야 한다.
  // 라우터 설정에 지정한 이름으로 글 번호를 얻어올 수 있다.
  const { postId } = useParams();

  // 원래라면 postId를 백엔드로 보내서 단일 조회 요청 (우리는 지금 백엔드가 없음 ㅜㅜ)
  // dummy-data에서 꺼내오도록 하겠습니다.
  const foundPost = posts.find((p) => p.id === +postId);
  const foundUser = users.find((u) => u.id === foundPost.user_id);
  const foundComments = comments.filter((c) => c.parent_id === +postId);

  const post = {
    ...foundPost,
    comments: [
      { id: 1, author: '김춘식', content: '좋은 글이네요!' },
      { id: 2, author: '홍길동', content: '잘 배웠습니다~~' },
    ],
  };
  const views = post.views.toLocaleString();

  return (
    <article className={styles.post}>
      <span className={styles.badge}>{post.category}</span>
      <UserProfile post={post} user={foundUser} />
      <h1>{post.title}</h1>
      <div className={styles.content}>{post.content}</div>
      <div className={styles.imgCropper}>
        <img src={post.image}></img>
      </div>
      <div className={styles.content}>
        <div className={styles.iconRow}>
          <span className={styles.iconGroup}>
            <ThumbButton />
            {post.likes}
          </span>
          <span className={styles.iconGroup}>
            <CommentButton />
            {post.comments.length}
          </span>
          <span className={styles.iconGroup}>
            <BookMarkButton /> {post.bookmarks}
          </span>
          <span className={styles.view}>조회 {views}</span>
        </div>
      </div>

      <div className={styles.comments}>
        <h2>댓글</h2>
        {foundComments.map((comment) => {
          const commentUser = users.find((u) => u.id === comment.user_id);
          return (
            <div key={comment.id} className={styles.comment}>
              <UserProfile post={post} user={commentUser} />
              <p>{comment.content}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default CommunityPageDetail;
