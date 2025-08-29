import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // 獲取當前的路由位置
  const { pathname } = useLocation();

  // 使用 useEffect 來監聽 pathname 的變化
  useEffect(() => {
    // 當 pathname 改變時，將窗口滾動到 (0, 0) 位置
    window.scrollTo(0, 0);
  }, [pathname]);

  // 這個組件不渲染任何可見的內容
  return null;
};

export default ScrollToTop;
