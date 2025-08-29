import { useState, useMemo, useEffect } from 'react';
import { Routes, Route , Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductDetailPage from './components/ProductDetailPage';
// 1. 從這裡移除了未使用的 "type Product"
import { initialProducts, categories, type Category } from './components/data/products'; 
// 2. 從這裡移除了未使用的 "type CartItem"
import { useCart } from './hooks/useCart'; 
import { useAuth } from './hooks/useAuth';
import CartDrawer from './components/CartDrawer';
import NewArrivals from './components/NewArrivals';
import { mockReviews } from './components/data/reviews';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'; 
import AccountPage from './components/AccountPage'; 

// 4. 在 App 組件外部或內部創建路由守衛組件
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user) {
    // 如果用戶未登入，重定向到登入頁面
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  const { 
    cartItems, 
    handleAddToCart, 
    handleUpdateQuantity,
    handleRemoveFromCart,
    totalPrice,
    isCartOpen,
    openCart,
    closeCart
  } = useCart();
  
  // ... (其他狀態和函數保持不變)
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');
  const handleSelectCategory = (category: Category | 'ALL') => {
    setSelectedCategory(category);
  };
  const [visibleCount, setVisibleCount] = useState(8);
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };
  useEffect(() => {
    setVisibleCount(8);
  }, [selectedCategory]);
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

  if (!featuredProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <Navbar 
        cartItems={cartItems}
        onCartClick={openCart}
        categories={['ALL', ...categories]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        products={initialProducts}
      />
      
      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <main className="flex-grow flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {selectedCategory === 'ALL' && <Hero product={featuredProduct} />}
                {selectedCategory === 'ALL' && <NewArrivals products={newArrivals} onAddToCart={handleAddToCart} />}
                {selectedCategory === 'ALL' && <Testimonials reviews={mockReviews} products={initialProducts} />}
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
          {/* 5. 在這裡添加新的路由 */}
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
      </main>

      <Footer />
    </div>
  );
}

export default App;