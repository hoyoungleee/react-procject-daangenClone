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
import GrayThumbButton from '../components/hoyoung/GrayThumbButton';
import GrayCommentButton from '../components/hoyoung/GrayCommentButton';
import SideMenu from '../components/hoyoung/SideMenu';

const CommunityPageDetail = () => {
  // 지금 상세보기 페이지의 postId값을 URL로부터 읽어와야 한다.
  // 라우터 설정에 지정한 이름으로 글 번호를 얻어올 수 있다.
  const { postId } = useParams();

  const foundPost = posts.find((p) => p.id === +postId);
  const foundUser = users.find((u) => u.id === foundPost.user_id);
  const foundComments = comments.filter((c) => c.parent_id === +postId);

  const post = {
    ...foundPost,
  };
  const views = post.views.toLocaleString();
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

  return (
    <>
      <div className={styles.breadcrumb}>
        <span>홈</span>&nbsp;&gt;&nbsp;
        <span>동네생활</span>&nbsp;&gt;&nbsp;
        <span>{post.category}</span>
      </div>
      <div className={styles.container}>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
        <article className={styles.post}>
          <span className={styles.badge}>{post.category}</span>
          <UserProfile post={post} user={foundUser} />
          <h1>{post.title}</h1>
          <p>{post.content}</p>

          {post.images.map((image) => (
            <div key={Math.random} className={styles.imageWrapper}>
              <img src={image} />
            </div>
          ))}

          <div className={styles.content}>
            <div className={styles.iconRow}>
              <span className={styles.iconGroup}>
                <ThumbButton />
                {post.likes}
              </span>
              <span className={styles.iconGroup}>
                <CommentButton />
                {foundComments.length}
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
                  <UserProfile post={comment} user={commentUser} />
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
                    {foundComments.length}
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </>
  );
};

export default CommunityPageDetail;
