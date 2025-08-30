import { useState } from 'react';
import { type Product } from './data/products';
import ProductCard from './ProductCard';

interface NewArrivalsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products, onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const productsToShow = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <section className="py-16 px-4 md:px-32">
      <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">New Arrivals</h2>
      {/* 1. grid-cols-1 を grid-cols-2 に変更 */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-black text-white px-24 py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            MORE
          </button>
        </div>
      )}
    </section>
  );
};

export default NewArrivals;
