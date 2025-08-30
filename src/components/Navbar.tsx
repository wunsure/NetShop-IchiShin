import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { type Product, type Category } from "./data/products";
import { type CartItem } from "../hooks/useCart";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";

interface NavbarProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  categories: (Category | "ALL")[];
  selectedCategory: Category | "ALL";
  onSelectCategory: (category: Category | "ALL") => void;
  products: Product[];
}

const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onCartClick,
  categories,
  selectedCategory,
  onSelectCategory,
  products,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const navigate = useNavigate();

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const previewProducts = useMemo(() => {
    if (!hoveredCategory) return [];
    return products.filter((p) => p.category === hoveredCategory).slice(0, 6);
  }, [hoveredCategory, products]);

  const handleCategoryClick = (category: Category | "ALL") => {
    onSelectCategory(category);
    setIsMobileMenuOpen(false);
    setHoveredCategory(null);
    navigate("/");
  };

  const renderNavLinks = (isMobile = false) => (
    <ul className={isMobile ? "space-y-4" : "flex items-center space-x-8"}>
      {categories.map((category) => (
        <li
          key={category}
          onMouseEnter={
            isMobile
              ? undefined
              : () =>
                  category !== "ALL" && setHoveredCategory(category as Category)
          }
        >
          <button
            onClick={() => handleCategoryClick(category)}
            className={`
              font-semibold transition-colors duration-200 whitespace-nowrap
              ${isMobile ? "block w-full text-left p-2" : ""}
              ${
                selectedCategory === category
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="sticky top-0 bg-white z-30 shadow-sm"
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
        {/* 手機左側漢堡 */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 absolute left-4"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          <Link
            to="/"
            className="text-2xl font-bold"
            onClick={() => handleCategoryClick("ALL")}
          >
            IchiShin
          </Link>
        </div>

        {/* 桌面版選單 */}
        <div className="hidden md:flex flex-1 justify-center ml-8">
          {renderNavLinks(false)}
        </div>

        {/* 右側圖標 */}
        <div className="flex items-center space-x-1 sm:space-x-4 absolute right-4 md:static">
          <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full">
            <User size={20} />
          </Link>

          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-gray-100 rounded-full"
          >
            <ShoppingBag size={20} />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* 手機版彈出菜單 */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative bg-white w-4/5 max-w-sm h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-lg">MENU</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X size={24} />
              </button>
            </div>
            {renderNavLinks(true)}
          </div>
        </div>
      )}

      {/* 超級菜單 */}
      {hoveredCategory && previewProducts.length > 0 && (
        <div
          className="absolute w-full bg-white shadow-lg z-20"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="max-w-7xl mx-auto py-8 px-8">
            <div className="grid grid-cols-6 gap-x-6 gap-y-8">
              {previewProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group text-center"
                  onClick={() => setHoveredCategory(null)}
                >
                  <div className="aspect-square w-full bg-gray-100 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-gray-800 group-hover:text-black transition-colors">
                    {product.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
