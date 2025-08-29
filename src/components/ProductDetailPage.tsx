import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { type Product } from './data/products';
import { Facebook, Twitter, MessageCircle } from 'lucide-react';

// 1. 在 Props 介面中新增 onAddToCart
interface ProductDetailPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ products, onAddToCart }) => { // 2. 從 props 中解構出函數
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

  // 客戶照片的模擬數據
  const customerPhotos = [
    'https://images.pexels.com/photos/1858488/pexels-photo-1858488.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  // 評論統計的模擬數據
  const reviewStats = {
    '5': 12,
    '4': 2,
    '3': 1,
    '2': 0,
    '1': 0,
  };
  const totalReviews = Object.values(reviewStats).reduce((sum, count) => sum + count, 0);

  // 詳細評論的模擬數據
  const detailedReviews = [
    {
      id: 1,
      customerName: 'Makenna',
      rating: 5,
      date: '08/15/2025',
      title: 'Super cute',
      content: "Love the peanut shape of this capybara and the way carries himself. I do believe that with the bigger yarn and bigger hook, some gaps are inevitable in the amigurumi, despite tight tension. I also wish the needle was not plastic. Each time I tried to stick it through and out the other side of my piece, it would bend around and it was hard to pull through the other side. I think if the needle was metal or more sturdy, this wouldn't be an issue.",
      image: 'https://images.pexels.com/photos/208821/pexels-photo-208821.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      customerName: 'John Doe',
      rating: 4,
      date: '08/12/2025',
      title: 'Great Value!',
      content: "Excellent quality for the price. The fabric is soft and it fits perfectly. Shipped faster than expected. Would definitely recommend to anyone looking for stylish and comfortable wear.",
      image: null,
    },
     {
      id: 3,
      customerName: 'Jane Smith',
      rating: 5,
      date: '08/10/2025',
      title: 'Absolutely love it!',
      content: "The design is even better in person. I've received so many compliments already. The customer service was also fantastic when I had a question about sizing.",
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
  ];

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
    { 
      name: 'Facebook', 
      Icon: Facebook, 
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` 
    },
    { 
      name: 'Twitter', 
      Icon: Twitter, 
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` 
    },
    { 
      name: 'Pinterest', 
      Icon: MessageCircle,
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(product.images[0])}&description=${encodeURIComponent(shareText)}` 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8">
      {/* 主要內容區：圖片和資訊 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* 左側：產品圖片畫廊 */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square w-full overflow-hidden">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
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

        {/* 右側：產品資訊 */}
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
          {/* 3. 為按鈕綁定 onClick 事件 */}
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
            <div className="flex items-center gap-4">
              {shareLinks.map(({ name, Icon, href }) => (
                <a 
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
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
            {/* 左側：總覽 */}
            <div className="flex flex-col items-center justify-center text-center md:border-r md:pr-8">
              {renderStars(product.rating, 'xl')}
              <p className="mt-2 text-gray-600">Based on {totalReviews} reviews</p>
            </div>
            {/* 右側：詳細分佈 */}
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
              {/* 左側：頭像和姓名 */}
              <div className="flex-shrink-0 w-full sm:w-48 flex sm:flex-col items-center gap-4 text-center">
                 <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500">
                   {review.customerName.charAt(0)}
                 </div>
                 <span className="font-semibold">{review.customerName}</span>
              </div>
              {/* 右側：評論內容 */}
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
                      className="max-w-xs h-auto rounded-md"
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