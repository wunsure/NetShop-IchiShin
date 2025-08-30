import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { type Product } from './data/products';
// 1. 從 reviews.ts 導入所有需要評論相關的數據
import { customerPhotos, reviewStats, detailedReviews } from './data/reviews'; 
import { Facebook, Twitter, MessageCircle } from 'lucide-react';

interface ProductDetailPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ products, onAddToCart }) => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === Number(productId));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || 'https://placehold.co/600x400?text=No+Image'
  );
  
  useEffect(() => {
    if (product?.images?.[0]) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex-1 p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>
      </div>
    );
  }
  
  // 2. 移除所有組件內部硬編碼的模擬數據
  const totalReviews = Object.values(reviewStats).reduce((sum, count) => sum + count, 0);

  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const renderStars = (starRating: number, size = 'xl') => {
    const starClass = size === 'xl' ? 'text-xl' : 'text-base';
    const fullStars = "★".repeat(Math.floor(starRating));
    const halfStar = starRating % 1 !== 0 ? "½" : "";
    const emptyStars = "☆".repeat(5 - Math.ceil(starRating));
    return <div className={`text-yellow-500 ${starClass}`}>{`${fullStars}${halfStar}${emptyStars}`}</div>;
  };

  const shareUrl = window.location.href;
  const shareText = `Check out this awesome product: ${product.name}!`;
  
  const shareLinks = [
    { name: 'Facebook', Icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: 'Twitter', Icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { name: 'Pinterest', Icon: MessageCircle, href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(product.images[0])}&description=${encodeURIComponent(shareText)}` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-4 sm:py-8 overflow-x-hidden">
      {/* 主要內容區：圖片和資訊 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="flex flex-col gap-4">
          <div className="aspect-square w-full overflow-hidden">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-4">
              {product.images.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => handleThumbnailClick(img)}
                  className={`aspect-square w-full overflow-hidden transition-all duration-200 border-2 ${
                    selectedImage === img ? 'border-blue-500 ring-2 ring-blue-300' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="w-full">
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">{product.name}</h2>
          <div className="flex items-center mb-4">
            {renderStars(product.rating)}
            <span className="ml-3 text-gray-500 text-lg">
              ({product.reviewCount} reviews)
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price}
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description}
          </p>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-black text-white px-6 py-4 text-lg font-semibold hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">From Our Customers</h3>
            <div className="scroller-container overflow-x-auto">
              <div className="scroller-inner flex space-x-4 pb-2">
                {[...customerPhotos, ...customerPhotos].map((photo, index) => (
                  <div key={index} className="scroller-item w-5/12 flex-shrink-0">
                    <div className="aspect-square w-full rounded-md overflow-hidden bg-gray-100">
                      <img 
                        src={photo} 
                        alt={`Customer photo ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {product.longDescription && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Details</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                {product.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="indent-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this product</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {shareLinks.map(({ name, Icon, href }) => (
                <a 
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors w-full sm:w-auto"
                >
                  <Icon size={16} />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 顧客評論統計區 */}
      <div className="mt-16 pt-12 border-t">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">CUSTOMER REVIEWS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center text-center md:border-r md:pr-8">
              {renderStars(product.rating, 'xl')}
              <p className="mt-2 text-gray-600">Based on {totalReviews} reviews</p>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-3">
                {Object.entries(reviewStats).reverse().map(([stars, count]) => {
                  const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                  return (
                    <div key={stars} className="flex items-center gap-4">
                      <div className="flex items-center">
                        <span className="font-medium">{stars}</span>
                        <span className="text-yellow-500 ml-1">★</span>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-yellow-400 h-2.5 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 w-16 text-right">{percentage.toFixed(0)}% ({count})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 詳細評論列表區 */}
      <div className="mt-16">
        <div className="space-y-12">
          {detailedReviews.map((review) => (
            <div key={review.id} className="flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0 w-full sm:w-48 flex sm:flex-col items-center gap-4 text-center">
                 <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500">
                   {review.customerName.charAt(0)}
                 </div>
                 <span className="font-semibold">{review.customerName}</span>
              </div>
              <div className="flex-1 border-t sm:border-t-0 sm:border-l pl-0 sm:pl-6 pt-6 sm:pt-0">
                <div className="flex items-center justify-between">
                  {renderStars(review.rating, 'base')}
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <h4 className="font-bold text-lg mt-2">{review.title}</h4>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {review.content}
                </p>
                {review.image && (
                  <div className="mt-4">
                    <img 
                      src={review.image} 
                      alt={`Review by ${review.customerName}`}
                      className="w-full max-w-xs h-auto rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

