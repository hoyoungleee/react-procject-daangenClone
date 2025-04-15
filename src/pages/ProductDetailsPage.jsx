import React, { useEffect, useState } from 'react';
import style from './ProductDetailsPage.module.scss';
import ImageCarousel from '../components/ImageCarousel';
import SellerInfo from '../components/SellerInfo';
import zoomStyle from './ImageZoom.module.scss';
import products from '../assets/productData.js';

import { useParams, useNavigate } from 'react-router-dom'; // useNavigate import 추가

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