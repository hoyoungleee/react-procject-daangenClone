import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import QrCodeModal from './modal/QrCodeModal';

const Header = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [showSearchOnly, setShowSearchOnly] = useState(false);

   // 모달 상태 관리
   const [isQrModalOpen, setIsQrModalOpen] = useState(false);
   // 모달 열기 함수
   const openQrModal = () => {
     setIsQrModalOpen(true);
   };
   // 모달 닫기 함수
   const closeQrModal = () => {
     setIsQrModalOpen(false);
   };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100;
      setShowSearchOnly(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: '중고거래', url: '/used-items' },
    {
      title: '부동산',
      submenu: ['부동산 검색', '중개사 서비스'],
    },
    {
      title: '중고차',
    },
    {
      title: '알바',
      submenu: ['알바 검색', '당근알바 소개', '기업형 서비스', '신뢰와 안전'],
    },
    { title: '동네업체' },
    { title: '동네생활', url: '/community' },
    { title: '모임' },
  ];

  return (
    <header
      className={`${styles.header} ${showSearchOnly ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        {/* 좌측: 로고 */}
        {!showSearchOnly && (
          <div className={styles.left} onClick={() => navigate('/')}>
            <img
              src='/images/logo.png'
              alt='당근 로고'
              className={styles.logo}
            />
          </div>
        )}

        {/* 중간: 검색창 또는 메뉴 */}
        <div className={styles.center}>
          {showSearchOnly ? (
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type='text'
                placeholder='동네 이름, 물품명 등을 검색해보세요'
                className={styles.searchInput}
              />
            </div>
          ) : (
            <nav className={styles.menu}>
              {menuItems.map((item, index) => {
                const isActive = hoveredIndex === index;
                const menuItemClass = `${styles.menuItem} ${
                  hoveredIndex !== null
                    ? isActive
                      ? styles.active
                      : styles.dimmed
                    : ''
                }`;

                const content = (
                  <div
                    className={menuItemClass}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={(e) => {
                      setTimeout(() => {
                        if (
                          !e.relatedTarget ||
                          !e.relatedTarget.closest(`.${styles.dropdown}`)
                        ) {
                          setHoveredIndex(null);
                        }
                      }, 300);
                    }}
                  >
                    <div className={styles.menuText}>
                      {item.title}
                      {item.submenu && (
                        <SlArrowDown className={styles.arrowIcon} />
                      )}
                    </div>

                    {item.submenu && hoveredIndex === index && (
                      <div
                        className={styles.dropdown}
                        onMouseEnter={() => setHoveredIndex(index)}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <div key={subIndex} className={styles.dropdownItem}>
                            <span>{subItem}</span>
                            {(subItem === '중개사 서비스' ||
                              subItem === '기업형 서비스' ||
                              subItem === '신뢰와 안전') && (
                              <GoArrowUpRight
                                className={styles.subIcon}
                                style={{
                                  fontSize: '20px',
                                  color: '#999',
                                  transform: 'translateY(1px)',
                                  display: 'inline-block',
                                  marginLeft: '-2px',
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );

                return item.url ? (
                  <Link
                    key={index}
                    to={item.url}
                    className={styles.linkWrapper}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </nav>
          )}
        </div>

        {/* 우측: 앱 다운로드 버튼 */}
        {!showSearchOnly && (
          <div className={styles.right}>
            <button className={styles.downloadBtn} onClick={openQrModal}>앱 다운로드</button>
            {isQrModalOpen && <QrCodeModal onClose={closeQrModal} />} {/*모달 랜더링링*/}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
