import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';
import FooterColumn from './FooterColumn';
import SocialIcon from './SocialIcon';

const Footer = () => {
  const footerData = {
    company: {
      title: '회사',
      links: [
        { name: '회사 소개', url: '/about' },
        { name: '당근페이', url: '/payment' },
        { name: '팀문화', url: '/culture' },
        { name: '서비스 소개', url: '/services' },
        { name: '블로그', url: '/blog' },
        { name: '채용', url: '/careers' },
      ],
    },
    explore: {
      title: '탐색',
      links: [
        { name: '중고거래', url: '/market' },
        { name: '부동산', url: '/realestate' },
        { name: '중고차', url: '/cars' },
        { name: '알바', url: '/jobs' },
        { name: '동네업체', url: '/local-business' },
        { name: '동네생활', url: '/community' },
        { name: '모임', url: '/meetings' },
        { name: '채팅하기', url: '/chat' },
      ],
    },
    business: {
      title: '비즈니스',
      links: [
        { name: '당근 비즈니스', url: '/business' },
        { name: '제휴 문의', url: '/partnership' },
        { name: '광고 문의', url: '/advertising' },
      ],
    },
    karrot: {
      title: 'Karrot',
      links: [
        { name: 'Canada', url: '/ca', hasArrow: true },
        { name: 'United States', url: '/us', hasArrow: true },
        { name: 'United Kingdom', url: '/uk', hasArrow: true },
        { name: '日本', url: '/jp', hasArrow: true },
      ],
    },
    inquiry: {
      title: '문의',
      links: [
        { name: 'IR', url: '/ir' },
        { name: 'PR', url: '/pr' },
        { name: '고객센터', url: '/support' },
      ],
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <img
              src='/images/logo.png'
              alt='당근마켓 로고'
              className={styles.logo}
            />
            <div className={styles.socialIcons}>
              <SocialIcon href='https://www.facebook.com/daangn/'>
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href='https://www.instagram.com/daangnmarket/'>
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href='https://www.youtube.com/channel/UC8tsBsQBuF7QybxgLmStihA'>
                <FaYoutube />
              </SocialIcon>
            </div>
          </div>

          <div className={styles.linksSection}>
            <FooterColumn
              title={footerData.company.title}
              links={footerData.company.links}
            />
            <FooterColumn
              title={footerData.explore.title}
              links={footerData.explore.links}
            />
            <FooterColumn
              title={footerData.business.title}
              links={footerData.business.links}
            />
            <FooterColumn
              title={footerData.karrot.title}
              links={footerData.karrot.links}
            />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <FooterColumn
            title={footerData.inquiry.title}
            links={footerData.inquiry.links}
          />
        </div>

        <div className={styles.divider}></div>
      </div>
    </footer>
  );
};

export default Footer;
