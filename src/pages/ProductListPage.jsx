import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../assets/productData'; // ✅ 수정됨
import styles from './ProductListPage.module.scss';

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(5); // 초기 표시 상품 개수
  const [locationFilter, setLocationFilter] = useState(''); // 위치 필터 상태 (초기값: '')
  const [categoryFilter, setCategoryFilter] = useState(''); // 카테고리 필터 상태 (초기값: '')
  const [priceFilter, setPriceFilter] = useState(''); // 가격 필터 상태 (초기값: '')
  const [filteredProducts, setFilteredProducts] = useState(products); // 필터링된 상품 목록
  const [showMoreLocations, setShowMoreLocations] = useState(false); // 위치 더보기 상태

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const toggleShowMoreLocations = () => {
    setShowMoreLocations(!showMoreLocations);
  };

  useEffect(() => {
    // 필터링 로직 (위치, 카테고리, 가격)
    let finalFilteredProducts = products;

    if (locationFilter) {
      finalFilteredProducts = finalFilteredProducts.filter(product => product.sellerData.location === locationFilter);
    }

    if (categoryFilter) {
      finalFilteredProducts = finalFilteredProducts.filter(product => product.category === categoryFilter);
    }

    if (priceFilter === 'under5000') {
      finalFilteredProducts = finalFilteredProducts.filter(product => parseInt(product.price.replace(/[^0-9]/g, '')) <= 5000);
    } else if (priceFilter === 'under10000') {
      finalFilteredProducts = finalFilteredProducts.filter(product => parseInt(product.price.replace(/[^0-9]/g, '')) <= 10000);
    } else if (priceFilter === 'under20000') {
      finalFilteredProducts = finalFilteredProducts.filter(product => parseInt(product.price.replace(/[^0-9]/g, '')) <= 20000);
    }

    setFilteredProducts(finalFilteredProducts);
    setVisibleCount(8); // 필터 변경 시 처음 8개만 보여주도록 초기화
  }, [locationFilter, categoryFilter, priceFilter]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  // 상품 데이터에서 고유한 카테고리 목록 추출
  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const initialLocations = ['잠원동', '서초동']; // 초기 위치 목록 (실제 데이터에 맞게 수정)
  const remainingLocations = [...new Set(products.map(product => product.sellerData.location))].filter(location => !initialLocations.includes(location));
  const visibleLocations = showMoreLocations ? [...initialLocations, ...remainingLocations] : initialLocations;

  return (
    <div className={styles.productListContainer}>
       <div className={styles.headerSection}> {/* 새로운 div로 묶음 */}
        <div className={styles.navigation}>
          <Link to="/">홈</Link> > <Link to="/used-items">중고거래</Link>
       

      <aside className={styles.filterSection}> {/* 필터 사이드바 */}
        <h3>위치</h3>
        <div>
          <label key="all-locations"> {/* "전체" 옵션 추가 */}
            <input
              type="radio"
              name="location"
              value=""
              checked={locationFilter === ''}
              onChange={handleLocationChange}
            />
            전체
          </label>
          {visibleLocations.map(location => (
            <label key={location}>
              <input
                type="radio"
                name="location"
                value={location}
                checked={locationFilter === location}
                onChange={handleLocationChange}
              />
              {location}
            </label>
          ))}
          {remainingLocations.length > 0 && (
            <button type="button" onClick={toggleShowMoreLocations}>
              {showMoreLocations ? '간략하게' : '더보기'}
            </button>
          )}
        </div>

        <h3>카테고리</h3>
        <div>
          <label key="all-categories"> {/* "전체" 옵션 추가 */}
            <input
              type="radio"
              name="category"
              value=""
              checked={categoryFilter === ''}
              onChange={handleCategoryChange}
            />
            전체
          </label>
          {uniqueCategories.map(category => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={categoryFilter === category}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          ))}
        </div>

        {/* 가격 필터 (기존 코드 유지) */}
        <h3>가격</h3>
        <div>
          <label>
            <input
              type="radio"
              name="price"
              value="free"
              checked={priceFilter === 'free'}
              onChange={handlePriceChange}
            />
            나눔
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="under5000"
              checked={priceFilter === 'under5000'}
              onChange={handlePriceChange}
            />
            5,000원 이하
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="under10000"
              checked={priceFilter === 'under10000'}
              onChange={handlePriceChange}
            />
            10,000원 이하
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="under20000"
              checked={priceFilter === 'under20000'}
              onChange={handlePriceChange}
            />
            20,000원 이하
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value=""
              checked={priceFilter === ''}
              onChange={handlePriceChange}
            />
            전체 가격
          </label>
        </div>
      </aside>
      </div>
      </div>

      <div className={styles.productList}>
        {displayedProducts.map(product => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className={styles.productItem}
          >
            <div className={styles.imageContainer}>
              <img
                src={product.slides?.[0] || '/assets/default-image.jpg'} // ✅ 안정성 개선
                alt={product.title}
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <div className={styles.productPrice}>{product.price}</div>
              <div className={styles.productLocation}>{product.sellerData.location}</div>
            </div>
          </Link>
        ))}
              {hasMore && (
        <button className={styles.loadMoreButton} onClick={handleLoadMore}>
          상품 더 보기 {/* ✅ UX 개선 */}
        </button>
      )}
      </div>

    </div>
  );
};

export default ProductList;