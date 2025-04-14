import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage';
import HomePage from './pages/IndexPage'; // 필요에 따라

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> {/* 홈페이지 경로는 필요에 따라 */}
        <Route path="/products/:id" element={<ProductDetailsPage />} /> {/* :id가 URL 파라미터 */}
      </Routes>
    </Router>
  );
}

export default App;