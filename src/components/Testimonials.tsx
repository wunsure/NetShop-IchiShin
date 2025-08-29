import { type Product } from './data/products';
import { type Review } from './data/reviews';

interface TestimonialsProps {
  reviews: Review[];
  products: Product[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ reviews, products }) => {
  const renderStars = (starRating: number) => {
    const fullStars = "★".repeat(Math.floor(starRating));
    const halfStar = starRating % 1 !== 0 ? "½" : "";
    const emptyStars = "☆".repeat(5 - Math.ceil(starRating));
    return `${fullStars}${halfStar}${emptyStars}`;
  };

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review) => {
            const product = products.find(p => p.id === review.productId);
            if (!product) return null;

            return (
              // 1. 默認為 flex-col (上下佈局)，在中等螢幕(md)以上變為 flex-row (左右佈局)
              <div key={review.id} className="border rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* 左側：商品圖 */}
                {/* 2. 手機上寬度為 w-full，桌面版為 md:w-1/2 */}
                <div className="w-full md:w-1/2 flex-shrink-0 aspect-video md:aspect-auto">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 右側：評論內容 */}
                {/* 3. 手機上寬度為 w-full，桌面版為 md:w-1/2 */}
                <div className="flex flex-col p-6 w-full md:w-1/2">
                  <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
                  <div className="text-yellow-500 my-1">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-sm font-medium text-gray-600">{review.customerName}</p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                    {review.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

