import { useEffect, type RefObject } from 'react'; // 1. 使用 type-only import
import { useLocation } from 'react-router-dom';

// 2. 將 props 類型從 HTMLElement 改為更精確的 HTMLDivElement
interface ScrollToTopProps {
  containerRef?: RefObject<HTMLDivElement| null>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ containerRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 檢查 ref 是否存在並且指向一個有效的元素
    if (containerRef?.current) {
      // 直接操作這個元素的 scrollTop 屬性
      containerRef.current.scrollTop = 0;
    }
  }, [pathname, containerRef]);

  return null;
};

export default ScrollToTop;

