import { type CartItem } from '../hooks/useCart';
import { X } from 'lucide-react';

interface CartDrawerProps {
  cartItems: CartItem[];
  totalPrice: number;
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  cartItems, 
  totalPrice,
  isOpen, 
  onClose,
  onUpdateQuantity,
  onRemoveFromCart 
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div 
        className="w-full sm:w-2/5 bg-white h-full flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      // 1. 提供了真實的備用圖片網址
                      src={item.images?.[0] || `https://placehold.co/80x80/e2e8f0/475569?text=${item.name.charAt(0)}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 border rounded-l-md hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-0.5 border-t border-b">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 border rounded-r-md hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <p className="text-gray-500">Your cart is empty.</p>
            <button 
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

