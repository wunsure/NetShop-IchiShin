import ProductCard from './ProductCard';
import { type Product, type Category } from './data/products';

// 1. 更新 props 接口，接收 selectedCategory
interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onLoadMore: () => void;
  hasMore: boolean;
  selectedCategory: Category | 'ALL';
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  onAddToCart,
  onLoadMore,
  hasMore,
  selectedCategory,
}) => {
  // 2. 決定標題顯示的文字
  const title = selectedCategory === 'ALL' ? 'All Products' : selectedCategory;

  return (
    <main id="product-list" className="py-16 px-4 md:px-32">
      {/* 3. 在這裡顯示分類標題 */}
      <h1 className="text-3xl font-bold mb-8 my-16 text-center">
        {title}
      </h1>

      {products.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </ul>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-700">暫無商品</h2>
          <p className="text-gray-500 mt-2">該分類下目前沒有商品，請試試看其他分類！</p>
        </div>
      )}

      <div className="mt-12 text-center">
        {hasMore && (
        <div className="text-center pb-16">
          <button
            onClick={onLoadMore} 
            className="bg-black text-white px-24 py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            MORE
          </button>
        </div>
      )}
      </div>
    </main>
  );
};

export default ProductList;
