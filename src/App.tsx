import { useRef } from 'react'; // 1. 導入 useRef
import Navbar from './components/Navbar';
import { useCart } from './hooks/useCart';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';
import { useProductData } from './hooks/useProductData';
import { detailedReviews } from './components/data/reviews'; 

function App() {
  const mainContainerRef = useRef<HTMLDivElement>(null); // 2. 創建一個 ref

  // ... (其他的 Hooks 和邏輯保持不變)
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

  return (
    // 3. 將 ref 綁定到最外層的 div 上
    <div ref={mainContainerRef} className="flex flex-col h-screen overflow-y-auto bg-white overflow-x-hidden">
      {/* 4. 將 ref 作為 prop 傳遞給 ScrollToTop */}
      <ScrollToTop containerRef={mainContainerRef!} />
      <Navbar 
        cartItems={cartItems}
        onCartClick={openCart}
        categories={['ALL', 'SUV', 'TRUCK', 'RACING', 'FAMILY', 'EMERGENCY VEHICLES']}
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