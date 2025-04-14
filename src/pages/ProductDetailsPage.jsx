import React, { useEffect, useState } from 'react';
import style from './ProductDetailsPage.module.scss';
import ImageCarousel from '../components/ImageCarousel';
import SellerInfo from '../components/SellerInfo';
import zoomStyle from './ImageZoom.module.scss';

import Img1 from '../assets/jinho/slides/img1.jpg';
import Img2 from '../assets/jinho/slides/img2.jpg';
import Img3 from '../assets/jinho/slides/img3.jpg';
import SellerImg1 from '../assets/jinho/slides/SellerImg1.jpg';
import otherImg1 from '../assets/jinho/slides/otherImage1.jpg';
import otherImg2 from '../assets/jinho/slides/otherImage2.jpg';

import popImg1 from '../assets/jinho/slides/popImg1.jpg';
import popImg2 from '../assets/jinho/slides/popImg2.jpg';
import popImg3 from '../assets/jinho/slides/popImg3.jpg';
import popImg4 from '../assets/jinho/slides/popImg4.jpg';
import popImg5 from '../assets/jinho/slides/popImg5.jpg';
import popImg6 from '../assets/jinho/slides/popImg6.jpg';
import popImg7 from '../assets/jinho/slides/popImg7.jpg';
import popImg8 from '../assets/jinho/slides/popImg8.jpg';
import popImg9 from '../assets/jinho/slides/popImg9.jpg';
import popImg10 from '../assets/jinho/slides/popImg10.jpg';
import popImg11 from '../assets/jinho/slides/popImg11.jpg';
import popImg12 from '../assets/jinho/slides/popImg12.jpg';
import popImg13 from '../assets/jinho/slides/popImg13.jpg';
import popImg14 from '../assets/jinho/slides/popImg14.jpg';
import popImg15 from '../assets/jinho/slides/popImg15.jpg';
import popImg16 from '../assets/jinho/slides/popImg16.jpg';
import popImg17 from '../assets/jinho/slides/popImg17.jpg';
import popImg18 from '../assets/jinho/slides/popImg18.jpg';
import { useParams } from 'react-router-dom';

// 상품 데이터 (나중에 외부 파일이나 API에서 가져올 수 있습니다.)

const products = [
  {
    id: '1',
    title: '이케아 벽선반(Burhult) 3개',
    slides: [Img1, Img2, Img3],
    sellerData: {
      profile: SellerImg1,
      nickname: '리틀토',
      location: '서초동',
      temperature: 48.6,
    },
    sellerOtherProducts: [
      {
        image: Img1,
        title: '이케아 벽선반(Burhult) 3개',
        price: '11,000원',
        location: '서초동',
      },
      {
        image: Img2,
        title: '이케아 벽선반(Burhult) 3개',
        price: '11,000원',
        location: '서초동',
      },
      {
        image: otherImg1,
        title: '레고 해적 70410',
        price: '80,000원',
        location: '부암동',
      },
      {
        image: otherImg1,
        title: '레고 해적 70410',
        price: '80,000원',
        location: '서초동',
      },
      {
        image: otherImg2,
        title: '레고 6242 해적, 정부군 ...',
        price: '150,000원',
        location: '부암동',
      },
      {
        image: otherImg2,
        title: '레고 6242 해적, 정부군 ...',
        price: '150,000원',
        location: '서초동',
      },
    ],
    category: '가구/인테리어',
    timeAgo: '끌올 3분 전',
    price: '11,000원',
    description: [
      'o 이케아 부르훌트 벽선반 세트입니다.',
      'o 24년에 샀는데 이사가서 팔아요.',
      'o 정확한 사이즈는 19.5 x 58.8cm 입니다. 드릴로 구멍 뚫어놨습니다.',
      'o 3개 일괄 1.5만원입니다.',
    ],
    stats: { chats: 2, likes: 14, views: 227 },
    popularListings: [
      {
        image: popImg1,
        title: '에어팟 프로2 c타입 4/7 구매품',
        price: '150,000원',
        location: '반포 4동',
      },
      {
        image: popImg2,
        title: '크르루제 오발 냄비',
        price: '100,000원',
        location: '방배 3동',
      },
      {
        image: popImg3,
        title: '마쥬 양가죽 자켓',
        price: '가격 없음',
        location: '서초 4동',
      },
      {
        image: popImg4,
        title: '<좌타용>랩골프 L.A.B. GOLF MEZZ.1 MAX 퍼터',
        price: '550,000원',
        location: '서초 1동',
      },
      {
        image: popImg5,
        title: '위닉스 보송 제습기, 필터새것',
        price: '370,000원',
        location: '서초동',
      },
      {
        image: popImg6,
        title: '락앤락진공쌀통',
        price: '10,000원',
        location: '양재동동',
      },
      {
        image: popImg7,
        title: '대림 대용량 제습기13L',
        price: '65,000원',
        location: '서초 2동',
      },
      {
        image: popImg8,
        title: 'LG 벽걸이 에어컨 실외기 포함',
        price: '50,000원',
        location: '방배4동',
      },
      {
        image: popImg9,
        title: '등산배낭 백팽',
        price: '10,000원',
        location: '반포 1동',
      },
      {
        image: popImg10,
        title: '천마차 23봉',
        price: '1,000원',
        location: '방배 1동',
      },
      {
        image: popImg11,
        title: '흔한남매 10~18권 불꽃튀는 우리말과 오해요',
        price: '35,000원',
        location: '서초3동',
      },
      {
        image: popImg12,
        title: '아식스 운동화',
        price: '30,000원',
        location: '방배본동',
      },
      {
        image: popImg13,
        title: '옷장 정리합니다.',
        price: '555,5555원',
        location: '서초동',
      },
      {
        image: popImg14,
        title: '용선생 시끌벅적 과학교실 40권',
        price: '100,000원',
        location: '반포동동',
      },
      {
        image: popImg15,
        title: '업투 프리미엄 사당점 회원권 양도',
        price: '200,000원',
        location: '방배본동',
      },
      {
        image: popImg16,
        title: '오프화이트 멀티패치 빈티지 야상',
        price: '100,000원',
        location: '반포 1동',
      },
      {
        image: popImg17,
        title: '스투시 L사이즈 티셔츠',
        price: '19,000원',
        location: '반포동',
      },
      {
        image: popImg18,
        title: '데스커 W1100 화이트보드',
        price: '60,000원',
        location: '반포 2동',
      },
    ],
  },
  {
    id: '2',
    title: '새로운 상품',
    slides: [popImg4, popImg5],
    sellerData: {
      profilePic: SellerImg1,
      nickname: '새로운 판매자',
      location: '강남',
      temperature: 36.5,
    },
    sellerOtherProducts: [
      {
        image: popImg6,
        title: '새로운 판매자 상품 1',
        price: '20,000원',
        location: '강남',
      },
    ],
    category: '기타',
    timeAgo: '1분 전',
    price: '20,000원',
    description: ['새로운 상품 설명입니다.'],
    stats: { chats: 0, likes: 1, views: 5 },
    popularListings: [
      {
        image: popImg1,
        title: '인기 상품 A',
        price: '12,000원',
        location: '동네 B',
      },
      {
        image: popImg3,
        title: '인기 상품 C',
        price: '30,000원',
        location: '동네 D',
      },
    ],
  },
  // ... 더 많은 상품 데이터 추가 가능
];

const ProductDetailsPage = () => {
  const { id } = useParams(); // URL에서 상품 ID를 가져옵니다.
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // URL의 id와 일치하는 상품 데이터를 찾습니다.
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>; // 상품 ID에 해당하는 데이터가 없을 경우
  }

  const {
    title,
    slides,
    sellerData,
    sellerOtherProducts,
    category,
    timeAgo,
    price,
    description,
    stats,
    popularListings,
  } = product;

  return (
    <div className={style.productDetailsPage}>
      <div className={style.breadcrumb}>
        <span>홈</span> ><span>중고거래</span>
        <span>{title}</span>
      </div>
      <div className={style.mainContent}>
        <div className={style.carouselSection}>
          <ImageCarousel slides={slides} />
          <SellerInfo {...sellerData} />
        </div>

        <div className={style.infoSection}>
          <h1 className={style.productTitle}>{title}</h1>

          <div className={style.metaInfo}>
            <span>{category}</span>
            <span>·</span>
            <span>{timeAgo}</span>
          </div>

          <div className={style.price}>{price}</div>

          <div className={style.sellerInfo}>
            <h2>판매자 정보</h2>
            <p>[판매자 정보 영역]</p>
          </div>

          <div className={style.description}>
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className={style.stats}>
            <span>채팅 {stats.chats}</span>
            <span>·</span>
            <span>관심 {stats.likes}</span>
            <span>·</span>
            <span>조회 {stats.views}</span>
          </div>

          <button type='button' className={style.actionButton}>
            당근 앱에서 보기
          </button>
        </div>
      </div>

      <div className={style.sellerProductsSection}>
        <div className={style.sectionTitleContainer}>
          <h2 className={style.sectionTitle}>
            {sellerData.nickname} 님의 판매물품
          </h2>
          <button className={style.viewMoreLink}>더 구경하기 &gt;</button>
        </div>

        <div className={style.sellerProductsList}>
          {sellerOtherProducts.map((item, index) => (
            <div key={index} className={style.productCard}>
              <div className={zoomStyle.imageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${style.productImage} ${zoomStyle.image}`}
                />
              </div>

              <div className={style.productDetails}>
                <div className={style.productTitle}>{item.title}</div>
                <div className={style.productPrice}>{item.price}</div>
                <div className={style.productLocation}>{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.popularListingsSection}>
        <div className={style.sectionTitleContainer}>
          <h2 className={style.sectionTitle}>인기 매물</h2>
          <button className={style.viewMoreLink}>더 구경하기 &gt;</button>
        </div>
        <div className={style.popularListingsList}>
          {popularListings.map((item, index) => (
            <div key={index} className={style.productCard}>
              <div className={zoomStyle.imageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${style.productImage} ${zoomStyle.image}`}
                />
              </div>
              <div className={style.productDetails}>
                <div className={style.productTitle}>{item.title}</div>
                <div className={style.productPrice}>{item.price}</div>
                <div className={style.productLocation}>{item.location}</div>
              </div>
            </div>
          ))}
        </div>
        <button className={style.viewMoreButton}>더 구경하기 </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
