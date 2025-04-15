import React, { useState } from 'react';
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
  const foundComments = comments
    .filter((c) => c.parent_id === +postId)
    .sort((a, b) => new Date(a.realDate) - new Date(b.realDate));

  const post = {
    ...foundPost,
  };
  const views = post.views.toLocaleString();

  const [sortComments, setComments] = useState(foundComments);
  const [sort, setSort] = useState('registered');
  const clickSortHandler = (status) => {
    setSort(status);
    if (status === 'registered') {
      setComments(
        [...sortComments].sort(
          (a, b) => new Date(a.realDate) - new Date(b.realDate),
        ),
      );
    } else {
      setComments(
        [...sortComments].sort(
          (a, b) => new Date(b.realDate) - new Date(a.realDate),
        ),
      );
    }
  };

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
          <div className={styles.meta}>
            <img
              src='https://assetstorage.krrt.io/1143366661080869398/6c774f35-3eef-44d7-8668-b6ed67e27b97/width=120,height=120.png'
              alt='공감버튼'
            />
            <span>이웃들이 공감했어요</span>
          </div>
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
            <div className={styles.sortTab}>
              <button
                className={`${styles.tab} ${sort === 'registered' ? styles.active : ''}`}
                onClick={() => clickSortHandler('registered')}
              >
                등록순
              </button>
              <button
                className={`${styles.tab} ${sort === 'latest' ? styles.active : ''}`}
                onClick={() => clickSortHandler('latest')}
              >
                최신순
              </button>
            </div>
            {sortComments.map((comment) => {
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
