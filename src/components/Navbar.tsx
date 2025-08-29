import { useState, useMemo } from 'react'; // 1. 導入 useMemo
import { Link , useNavigate} from 'react-router-dom';
import { type CartItem } from '../hooks/useCart';
import { type Category, type Product } from './data/products'; // 2. 導入 Product 類型
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

// 3. 更新 Props 接口，接收 products
interface NavbarProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  categories: (Category | 'ALL')[];
  selectedCategory: Category | 'ALL';
  onSelectCategory: (category: Category | 'ALL') => void;
  products: Product[];
}

const Navbar: React.FC<NavbarProps> = ({ 
  cartItems, onCartClick, categories, selectedCategory, onSelectCategory, products
}) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 4. 創建 state 來追蹤鼠標懸停的分類
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const navigate = useNavigate();
  // 5. 使用 useMemo 來高效計算懸停分類下的商品
  const productsInHoveredCategory = useMemo(() => {
    if (!hoveredCategory) return [];
    // 只顯示最多6個商品作為預覽
    return products.filter(p => p.category === hoveredCategory).slice(0, 6);
  }, [hoveredCategory, products]);

  const getCategoryClassName = (category: Category | 'ALL') => {
    const baseClasses = "transition px-3 py-1 rounded-md text-sm font-medium";
    if (category === selectedCategory) return `${baseClasses} bg-black text-white`;
    return `${baseClasses} hover:bg-gray-200`;
  };

  const renderNavLinks = (isMobile = false) => (
    <ul className={isMobile ? "flex flex-col space-y-1" : "flex space-x-4 items-center"}>
      {categories.map((category) => (
        <li key={category} 
            // 6. 為桌面版的 li 元素綁定鼠標進入事件
            onMouseEnter={() => !isMobile && category !== 'ALL' && setHoveredCategory(category as Category)}
        >
          <button
            type="button"
            className={isMobile ? `w-full text-left p-4 text-base ${getCategoryClassName(category)}` : getCategoryClassName(category)}
            onClick={() => {
              onSelectCategory(category);
               navigate('/');
              if (isMobile) setIsMobileMenuOpen(false);
            }}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    // 7. 將導航欄和超級菜單包裹在一個容器中，並綁定 onMouseLeave 事件
    <div onMouseLeave={() => setHoveredCategory(null)} className="relative">
      <nav className="bg-white text-gray-900 px-4 sm:px-8 py-4 shadow-sm z-30 relative border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button type="button" className="md:hidden mr-4 p-2" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Link to="/" className="text-2xl font-bold">NetShop</Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            {renderNavLinks()}
          </div>
          <div className="flex space-x-4 sm:space-x-6 items-center">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full"><Search size={20} /></button>
            <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full">
              <User size={20} />
            </Link>
            <button type="button" onClick={onCartClick} className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{totalItems}</div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 8. 超級菜單面板 */}
      {hoveredCategory && productsInHoveredCategory.length > 0 && (
        <div className="hidden md:block absolute top-full left-0 w-full bg-white border-b shadow-lg z-20">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <h3 className="text-lg font-semibold mb-6">{hoveredCategory}</h3>
            <div className="grid grid-cols-6 gap-8">
              {productsInHoveredCategory.map(product => (
                <Link to={`/products/${product.id}`} key={product.id} className="group text-center">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800 truncate group-hover:text-blue-600">{product.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 手機版抽屜式菜單 */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex" aria-modal="true">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative flex flex-col w-4/5 max-w-xs h-full bg-white shadow-xl py-4 pb-12">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Menu</h2>
              <button type="button" className="-mr-2 p-2 rounded-md" onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="mt-6 px-4">{renderNavLinks(true)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
