import { Link } from "react-router-dom";
import { type Product } from './data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { id, name, price, rating, reviewCount, images } = product;
  
  const renderStars = (starRating: number) => {
    const fullStars = "★".repeat(Math.floor(starRating));
    const halfStar = starRating % 1 !== 0 ? "½" : "";
    const emptyStars = "☆".repeat(5 - Math.ceil(starRating));
    return `${fullStars}${halfStar}${emptyStars}`;
  };

  return (
    <li key={id} className="transition bg-white flex flex-col shadow-sm hover:shadow-lg">
      <Link to={`/products/${id}`} className="block group">
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-1">
          <h3 className="font-semibold text-gray-800 truncate">{name}</h3>
          <div className="flex items-center text-yellow-500 text-sm mt-2">
            {renderStars(rating)}
            <span className="ml-2 text-gray-500">({reviewCount})</span>
          </div>
          <div className="mt-3 text-lg font-bold text-gray-900">${price}</div>
        </div>
      </Link>
      <div className="mt-auto">
        <button
          className="w-full bg-gray-600 text-white py-2 transition-opacity duration-300 hover:opacity-75"
          onClick={() => onAddToCart(product)}
        >
          ADD TO CART
        </button>
      </div>
    </li>
  );
};

export default ProductCard;