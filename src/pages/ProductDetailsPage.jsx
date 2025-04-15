import React, { useEffect, useState } from 'react';
import style from './ProductDetailsPage.module.scss';
import ImageCarousel from '../components/ImageCarousel';
import SellerInfo from '../components/SellerInfo';
import zoomStyle from './ImageZoom.module.scss';

import { useParams, useNavigate } from 'react-router-dom'; // useNavigate import 추가


const products = [
  {
    id: '1',
    title: '이케아 벽선반(Burhult) 3개',
    slides: ['/assets/jinho/slides/img1.jpg', '/assets/jinho/slides/img2.jpg', '/assets/jinho/slides/img3.jpg'],
    sellerData: {
      profile: '/assets/jinho/slides/SellerImg1.jpg',
      nickname: '리틀토',
      location: '서초동',
      temperature: 48.6,
    },
    sellerOtherProducts: [
      {
        id: 'sp1', // ID 추가
        image: ['/assets/jinho/slides/img1.jpg'],
        title: '이케아 벽선반(Burhult) 3개',
        price: '11,000원',
        location: '서초동',
      },
      {
        id: 'sp2', // ID 추가
        image: ['/assets/jinho/slides/img1.jpg'],
        title: '이케아 벽선반(Burhult) 3개',
        price: '11,000원',
        location: '서초동',
      },
      {
        id: 'sp3', // ID 추가
        image: ['/assets/jinho/slides/otherImage1.jpg'],
        title: '레고 해적 70410',
        price: '80,000원',
        location: '부암동',
      },
      {
        id: 'sp4', // ID 추가
        image: ['/assets/jinho/slides/otherImage1.jpg'],
        title: '레고 해적 70410',
        price: '80,000원',
        location: '서초동',
      },
      {
        id: 'sp5', // ID 추가
        image: ['/assets/jinho/slides/otherImage2.jpg'],
        title: '레고 6242 해적, 정부군 ...',
        price: '150,000원',
        location: '부암동',
      },
      {
        id: 'sp6', // ID 추가
        image: ['/assets/jinho/slides/otherImage2.jpg'],
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
        id: 'pop1', // ID 추가
        image: ['/assets/jinho/slides/popImg1.jpg'],
        title: '에어팟 프로2 c타입 4/7 구매품',
        price: '150,000원',
        location: '반포 4동',
      },
      {
        id: 'pop2', // ID 추가
        image: ['/assets/jinho/slides/popImg2.jpg'],
        title: '크르루제 오발 냄비',
        price: '100,000원',
        location: '방배 3동',
      },
      {
        id: 'pop3', // ID 추가
        image: ['/assets/jinho/slides/popImg3.jpg'],
        title: '마쥬 양가죽 자켓',
        price: '가격 없음',
        location: '서초 4동',
      },
      {
        id: 'pop4', // ID 추가
        image: ['/assets/jinho/slides/popImg4.jpg'],
        title: '<좌타용>랩골프 L.A.B. GOLF MEZZ.1 MAX 퍼터',
        price: '550,000원',
        location: '서초 1동',
      },
      {
        id: 'pop5', // ID 추가
        image: ['/assets/jinho/slides/popImg5.jpg'],
        title: '위닉스 보송 제습기, 필터새것',
        price: '370,000원',
        location: '서초동',
      },
      {
        id: 'pop6', // ID 추가
        image: ['/assets/jinho/slides/popImg6.jpg'],
        title: '락앤락진공쌀통',
        price: '10,000원',
        location: '양재동동',
      },
      {
        id: 'pop7', // ID 추가
        image: ['/assets/jinho/slides/popImg7.jpg'],
        title: '대림 대용량 제습기13L',
        price: '65,000원',
        location: '서초 2동',
      },
      {
        id: 'pop8', // ID 추가
        image: ['/assets/jinho/slides/popImg8.jpg'],
        title: 'LG 벽걸이 에어컨 실외기 포함',
        price: '50,000원',
        location: '방배4동',
      },
      {
        id: 'pop9', // ID 추가
        image: ['/assets/jinho/slides/popImg9.jpg'],
        title: '등산배낭 백팽',
        price: '10,000원',
        location: '반포 1동',
      },
      {
        id: 'pop10', // ID 추가
        image: ['/assets/jinho/slides/popImg10.jpg'],
        title: '천마차 23봉',
        price: '1,000원',
        location: '방배 1동',
      },
      {
        id: 'pop11', // ID 추가
        image: ['/assets/jinho/slides/popImg11.jpg'],
        title: '흔한남매 10~18권 불꽃튀는 우리말과 오해요',
        price: '35,000원',
        location: '서초3동',
      },
      {
        id: 'pop12', // ID 추가
        image: ['/assets/jinho/slides/popImg12.jpg'],
        title: '아식스 운동화',
        price: '30,000원',
        location: '방배본동',
      },
      {
        id: 'pop13', // ID 추가
        image: ['/assets/jinho/slides/popImg13.jpg'],
        title: '옷장 정리합니다.',
        price: '555,5555원',
        location: '서초동',
      },
      {
        id: 'pop14', // ID 추가
        image: ['/assets/jinho/slides/popImg14.jpg'],
        title: '용선생 시끌벅적 과학교실 40권',
        price: '100,000원',
        location: '반포동동',
      },
      {
        id: 'pop15', // ID 추가
        image: ['/assets/jinho/slides/popImg15.jpg'],
        title: '업투 프리미엄 사당점 회원권 양도',
        price: '200,000원',
        location: '방배본동',
      },
      {
        id: 'pop16', // ID 추가
        image: ['/assets/jinho/slides/popImg16.jpg'],
        title: '오프화이트 멀티패치 빈티지 야상',
        price: '100,000원',
        location: '반포 1동',
      },
      {
        id: 'pop17', // ID 추가
        image: ['/assets/jinho/slides/popImg17.jpg'],
        title: '스투시 L사이즈 티셔츠',
        price: '19,000원',
        location: '반포동',
      },
      {
        id: 'pop18', // ID 추가
        image: ['/assets/jinho/slides/popImg18.jpg'],
        title: '데스커 W1100 화이트보드',
        price: '60,000원',
        location: '반포 2동',
      },
    ],
  },
  {
    id: 'pop1',
    title: '에어팟 프로2 c타입',
    slides: ['/assets/jinho/slides/popImg1.jpg', '/assets/jinho/slides/popItem1/popItem1_1.jpg', '/assets/jinho/slides/popItem1/popItem1_2.jpg'],
    sellerData: {
      profilePic: ['/assets/jinho/slides/popImg1.jpg'],
      nickname: '제발 사주세요',
      location: '안압동5가',
      temperature: 44.4,
    },
    sellerOtherProducts: [
      {
        id: 'sp7', // ID 추가
        image: ['/assets/jinho/slides/popImg6.jpg'],
        title: '새로운 판매자 상품 1',
        price: '20,000원',
        location: '강남',
      },
    ],
    category: '디지털기기',
    timeAgo: '1개월 전',
    price: '16,000원',
    description: ['모든 구성이 들어있는 에어팟 프로2 C타입 입니다..만',
                  '충전케이스 외관 상태가 사진과 같습니다, 슈피겐케이스를 끼우려다 뚜껑감싸는거가 잘 안붙어서 강력접착제를 쓰려던게 터저버려서 충전케이스에 묻는 바람에 하...',
                  '충전케이스 외관 외 구성 모두 생활기스 외 A급 컨디션이며 정상작동하며 충전케이스도 기능 이상 없습니다',
                  '보증기간 2025.10.1까지로 남아있습니다',
                  '거래는 낮 1시부터~6시반 사이 교대역쪽에서 가능합니다'
    ],
    stats: { chats: 1, likes: 2, views: 158 },
    popularListings: [
      {
        id: '1', // ID 추가
        image: ['/assets/jinho/slides/img1.jpg'],
        title: '이케아 벽선반(Burhult) 3개',
        price: '11,000원',
        location: '서초동',
      },
      {
        id: 'pop2', // ID 추가
        image: ['/assets/jinho/slides/popImg2.jpg'],
        title: '크르루제 오발 냄비',
        price: '100,000원',
        location: '방배 3동',
      },
      {
        id: 'pop3', // ID 추가
        image: ['/assets/jinho/slides/popImg3.jpg'],
        title: '마쥬 양가죽 자켓',
        price: '가격 없음',
        location: '서초 4동',
      },
      {
        id: 'pop4', // ID 추가
        image: ['/assets/jinho/slides/popImg4.jpg'],
        title: '<좌타용>랩골프 L.A.B. GOLF MEZZ.1 MAX 퍼터',
        price: '550,000원',
        location: '서초 1동',
      },
      {
        id: 'pop5', // ID 추가
        image: ['/assets/jinho/slides/popImg5.jpg'],
        title: '위닉스 보송 제습기, 필터새것',
        price: '370,000원',
        location: '서초동',
      },
      {
        id: 'pop6', // ID 추가
        image: ['/assets/jinho/slides/popImg6.jpg'],
        title: '락앤락진공쌀통',
        price: '10,000원',
        location: '양재동동',
      },
      {
        id: 'pop7', // ID 추가
        image: ['/assets/jinho/slides/popImg7.jpg'],
        title: '대림 대용량 제습기13L',
        price: '65,000원',
        location: '서초 2동',
      },
      {
        id: 'pop8', // ID 추가
        image: ['/assets/jinho/slides/popImg8.jpg'],
        title: 'LG 벽걸이 에어컨 실외기 포함',
        price: '50,000원',
        location: '방배4동',
      },
      {
        id: 'pop9', // ID 추가
        image: ['/assets/jinho/slides/popImg9.jpg'],
        title: '등산배낭 백팽',
        price: '10,000원',
        location: '반포 1동',
      },
      {
        id: 'pop10', // ID 추가
        image: ['/assets/jinho/slides/popImg10.jpg'],
        title: '천마차 23봉',
        price: '1,000원',
        location: '방배 1동',
      },
      {
        id: 'pop11', // ID 추가
        image: ['/assets/jinho/slides/popImg11.jpg'],
        title: '흔한남매 10~18권 불꽃튀는 우리말과 오해요',
        price: '35,000원',
        location: '서초3동',
      },
      {
        id: 'pop12', // ID 추가
        image: ['/assets/jinho/slides/popImg12.jpg'],
        title: '아식스 운동화',
        price: '30,000원',
        location: '방배본동',
      },
      {
        id: 'pop13', // ID 추가
        image: ['/assets/jinho/slides/popImg13.jpg'],
        title: '옷장 정리합니다.',
        price: '555,5555원',
        location: '서초동',
      },
      {
        id: 'pop14', // ID 추가
        image: ['/assets/jinho/slides/popImg14.jpg'],
        title: '용선생 시끌벅적 과학교실 40권',
        price: '100,000원',
        location: '반포동동',
      },
      {
        id: 'pop15', // ID 추가
        image: ['/assets/jinho/slides/popImg15.jpg'],
        title: '업투 프리미엄 사당점 회원권 양도',
        price: '200,000원',
        location: '방배본동',
      },
      {
        id: 'pop16', // ID 추가
        image: ['/assets/jinho/slides/popImg16.jpg'],
        title: '오프화이트 멀티패치 빈티지 야상',
        price: '100,000원',
        location: '반포 1동',
      },
      {
        id: 'pop17', // ID 추가
        image: ['/assets/jinho/slides/popImg17.jpg'],
        title: '스투시 L사이즈 티셔츠',
        price: '19,000원',
        location: '반포동',
      },
      {
        id: 'pop18', // ID 추가
        image: ['/assets/jinho/slides/popImg18.jpg'],
        title: '데스커 W1100 화이트보드',
        price: '60,000원',
        location: '반포 2동',
      },
    ],
  },
  // ... 더 많은 상품 데이터 추가 가능
];

const ProductDetailsPage = () => {
  const { id: currentProductId } = useParams(); // URL에서 상품 ID를 가져옵니다.
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 불러오기

  useEffect(() => {
    // URL의 id와 일치하는 상품 데이터를 찾습니다.
    const foundProduct = products.find((p) => p.id === currentProductId);
    setProduct(foundProduct);
  }, [currentProductId]);

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

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`); // 클릭 시 해당 상품 ID로 이동
  };

  return (
    <div className={style.productDetailsPage}>
      <div className={style.breadcrumb}>
        <span>홈</span>&nbsp;&gt;&nbsp;
        <span>중고거래</span>&nbsp;&gt;&nbsp;
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
            <div
              key={index}
              className={style.productCard}
              onClick={() => handleProductClick(item.id)} // 클릭 이벤트 핸들러 추가
              style={{ cursor: 'pointer' }} // 클릭 가능한 것처럼 마우스 커서 변경 (선택 사항)
            >
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
            <div
              key={index}
              className={style.productCard}
              onClick={() => handleProductClick(item.id)} // 클릭 이벤트 핸들러 추가
              style={{ cursor: 'pointer' }} // 클릭 가능한 것처럼 마우스 커서 변경 (선택 사항)
            >
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