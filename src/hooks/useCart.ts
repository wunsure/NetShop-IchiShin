import { useState, useMemo, useEffect } from 'react';
import { type Product } from '../components/data/products';

// 1. 更新 CartItem 介面
export interface CartItem extends Product {
  quantity: number;
}

const CART_STORAGE_KEY = 'cart_items';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedItems = window.localStorage.getItem(CART_STORAGE_KEY);
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      return [];
    }
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to localStorage", error);
    }
  }, [cartItems]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const handleAddToCart = (productToAdd: Product) => {
    setCartItems((prevItems) => {
      // 檢查商品是否已在購物車中
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);

      if (existingItem) {
        // 如果存在，增加數量，但要檢查庫存
        if (existingItem.quantity < productToAdd.stock) {
          return prevItems.map((item) =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // 如果庫存已達上限，可以給出提示（可選）
          console.warn(`Cannot add more of ${productToAdd.name}. Stock limit reached.`);
          return prevItems; // 返回原陣列，不做改動
        }
      } else {
        // 如果不存在，新增商品，初始數量為 1
        return [
          ...prevItems,
          // 2. 這就是你問的那一行，確保新商品使用 images 陣列
          { ...productToAdd, quantity: 1, images: productToAdd.images ?? ["/placeholder.png"], },
        ];
      }
    });
    openCart(); // 添加商品後自動打開抽屜
  };
  
  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevItems) => {
      const product = initialProducts.find(p => p.id === productId);
      if (!product) return prevItems;

      if (newQuantity > 0 && newQuantity <= product.stock) {
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        );
      } else if (newQuantity === 0) {
        return prevItems.filter((item) => item.id !== productId);
      }
      return prevItems;
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };
  
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  // 在 useCart Hook 的 console.log 中添加註釋，說明其來源
  // console.log('當前購物車 (來自 useCart Hook):', cartItems);

  return {
    cartItems,
    isCartOpen,
    openCart,
    closeCart,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveFromCart,
    totalPrice
  };
};

// 為了在 handleUpdateQuantity 中能訪問到商品庫存，我們需要 initialProducts
// 雖然這不是最優雅的方式（更好的方式是將 products 作為參數傳入），但對於目前結構是可行的
import { initialProducts } from '../components/data/products';

