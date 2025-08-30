import { useState, useMemo, useEffect } from 'react';
import { initialProducts, type Category } from '../components/data/products';

// 這個 Hook 封裝了所有與商品數據篩選、分頁相關的邏輯
export const useProductData = () => {
  // --- 分類篩選的狀態 ---
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');
  const handleSelectCategory = (category: Category | 'ALL') => {
    setSelectedCategory(category);
  };

  // --- "加載更多" 的狀態 ---
  const [visibleCount, setVisibleCount] = useState(4);
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };
   
  // 當分類切換時，重置可見數量
  useEffect(() => {
    setVisibleCount(4);
  }, [selectedCategory]);
  
  // --- 使用 useMemo 進行的複雜數據計算 ---
  const featuredProduct = useMemo(() => initialProducts.find(p => p.id === 6), []);
  const newArrivals = useMemo(() => initialProducts.filter(p => p.isNew), []);
  const regularProducts = useMemo(() => initialProducts.filter(p => !p.isNew), []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return regularProducts;
    }
    return regularProducts.filter(p => p.category === selectedCategory);
  }, [selectedCategory, regularProducts]);

  const productsToShow = useMemo(() => filteredProducts.slice(0, visibleCount), [filteredProducts, visibleCount]);
  const hasMore = visibleCount < filteredProducts.length;

  // 將所有數據和函數打包返回
  return {
    // 原始數據
    allProducts: initialProducts,
    featuredProduct,
    newArrivals,
    // 篩選後的數據
    productsToShow,
    hasMore,
    // 狀態和處理函數
    selectedCategory,
    handleSelectCategory,
    handleLoadMore,
  };
};
