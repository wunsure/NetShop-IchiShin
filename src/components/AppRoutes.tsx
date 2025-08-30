import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './Hero';
import ProductList from './ProductList';
import ProductDetailPage from './ProductDetailPage';
import NewArrivals from './NewArrivals';
import Testimonials from './Testimonials';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AccountPage from './AccountPage';
import { useAuth } from '../hooks/useAuth';
import { type Product, type Category } from './data/products';
import { type Review } from './data/reviews';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user) { return <Navigate to="/login" replace />; }
  return <>{children}</>;
};

interface AppRoutesProps {
  selectedCategory: Category | 'ALL';
  featuredProduct: Product;
  newArrivals: Product[];
  handleAddToCart: (product: Product) => void;
  // 1. 將 Props 名稱從 mockReviews 改為 detailedReviews
  detailedReviews: Review[]; 
  initialProducts: Product[];
  productsToShow: Product[];
  hasMore: boolean;
  handleLoadMore: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  selectedCategory,
  featuredProduct,
  newArrivals,
  handleAddToCart,
  // 2. 解構出新的 prop 名稱
  detailedReviews,
  initialProducts,
  productsToShow,
  hasMore,
  handleLoadMore,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {selectedCategory === 'ALL' && <Hero product={featuredProduct} />}
            {selectedCategory === 'ALL' && <NewArrivals products={newArrivals} onAddToCart={handleAddToCart} />}
            {/* 3. 將傳遞給 Testimonials 的 prop 值改為 detailedReviews */}
            {selectedCategory === 'ALL' && <Testimonials reviews={detailedReviews} products={initialProducts} />}
            <ProductList 
              products={productsToShow} 
              onAddToCart={handleAddToCart}
              hasMore={hasMore}
              onLoadMore={handleLoadMore}
              selectedCategory={selectedCategory}
            />
          </>
        }
      />
      <Route
        path="/products/:productId"
        element={
          <ProductDetailPage 
            products={initialProducts} 
            onAddToCart={handleAddToCart}
          />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} /> 
      <Route 
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

