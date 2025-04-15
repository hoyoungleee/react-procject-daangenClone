import React from 'react';
import styles from './SideMenu.module.scss';

const SideMenu = () => {
  return (
    <aside className={styles.sideMenu}>
      <h3 className={styles.sideMenu__title}>
        <img
          src='https://img.kr.gcp-karroter.net/community-admin/community-admin/20250305/d5439251-5e14-427e-bc05-23610b348d5b.png'
          alt='불꽃'
          className={styles.fire}
        />
        인기글
      </h3>
      <ul className={styles.sideMenu__list}>
        <li>전체</li>
        <li>맛집</li>
        <li>반려동물</li>
        <li>운동</li>
        <li>생활/편의</li>
        <li>분실/실종</li>
        <li>병원/약국</li>
        <li>고민/사연</li>
        <li>동네친구</li>
        <li>이사/시공</li>
        <li>주거/부동산</li>
        <li>교육</li>
        <li>취미</li>
        <li>동네사건사고</li>
        <li>동네풍경</li>
        <li>미용</li>
        <li>임신/육아</li>
        <li>일반</li>
      </ul>
    </aside>
  );
};

export default SideMenu;
