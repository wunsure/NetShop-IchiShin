import { useState } from 'react';
import ProductCard from './ProductCard';
import { type Product } from './data/products';

const ITEMS_PER_PAGE = 4; // 新品區塊每次加載4個

interface NewArrivalsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products, onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + ITEMS_PER_PAGE);
  };

  const productsToShow = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  // 如果沒有新品，則不渲染此區塊
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-8 px-8 md:px-32">
      <h1 className="text-3xl font-bold my-16 text-center">
        NEW ARRIVAL
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
      <div className="mt-12 text-center">
        {hasMore && (
          <button
            onClick={handleLoadMore}
            className="bg-black text-white font-bold py-3 px-12 rounded-none hover:bg-gray-800 transition duration-300"
          >
            MORE
          </button>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
