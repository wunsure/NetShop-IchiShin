import Navbar from './components/Navbar';
import { useCart } from './hooks/useCart';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';
import { useProductData } from './hooks/useProductData'; // 1. 導入新的 Hook
import { detailedReviews } from './components/data/reviews'; 

function App() {
  // --- 購物車相關邏輯 ---
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
  
  // --- 商品數據相關邏輯 (現在全部來自 useProductData Hook) ---
  const {
    allProducts,
    featuredProduct,
    newArrivals,
    productsToShow,
    hasMore,
    selectedCategory,
    handleSelectCategory,
    handleLoadMore,
  } = useProductData();


  if (!featuredProduct) {
    return <div>Loading...</div>;
  }

  // --- 頁面佈局 (Layout) ---
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <Navbar 
        cartItems={cartItems}
        onCartClick={openCart}
        categories={['ALL', 'SUV', 'COLLABS', 'BUNDLES', 'SUMMERWEEN', 'MERCH']}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        products={allProducts}
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
        <AppRoutes 
          selectedCategory={selectedCategory}
          featuredProduct={featuredProduct}
          newArrivals={newArrivals}
          handleAddToCart={handleAddToCart}
          detailedReviews={detailedReviews}
          initialProducts={allProducts}
          productsToShow={productsToShow}
          hasMore={hasMore}
          handleLoadMore={handleLoadMore}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;

