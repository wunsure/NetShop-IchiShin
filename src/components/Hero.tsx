import { Link } from "react-router-dom";
import { type Product } from "./data/products";

interface HeroProps {
  product: Product;
}

const Hero: React.FC<HeroProps> = ({ product }) => {
  return (
    // 1. 將 header 設為相對定位容器，並設定一個建議的高度
    <header
      className="relative bg-gray-900 text-white overflow-hidden flex items-center justify-center"
      style={{ height: "70vh" }}
    >
      {/* 背景圖片 */}
      <img
        src={product.images[0]}
        alt="" // 背景圖的 alt 可以為空
        // 2. 絕對定位，填滿整個容器，並使用 object-cover
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      {/* 半透明遮罩，確保文字可讀性 */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* 文字內容容器 */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">
          Featured Product
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold my-4 leading-tight">
          {product.name}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
          {product.description}
        </p>
        <div className="mt-8">
          <Link
            to={`/products/${product.id}`}
            // 3. 按鈕樣式調整為白色，以在深色背景上脫穎而出
            className="inline-block bg-white text-black font-bold text-lg px-10 py-4 rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
