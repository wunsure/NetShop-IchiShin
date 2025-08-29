import { createContext, useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// 模擬的用戶數據庫
const mockUser = {
  email: 'user@example.com',
  password: 'password123',
  name: 'Makenna',
};

// 定義 Context 需要提供的值的類型
interface AuthContextType {
  user: { email: string; name: string } | null;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

// 創建 Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 創建 AuthProvider 組件，它將包裹我們的整個應用
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const navigate = useNavigate();

  const login = async (data: any) => {
    // 檢查用戶名是否存在
    if (data.email !== mockUser.email) {
      throw new Error("User does not exist. Please create an account.");
    }
    // 檢查密碼是否正確
    if (data.password !== mockUser.password) {
      throw new Error("Incorrect password. Please try again.");
    }
    // 登入成功
    const loggedInUser = { email: mockUser.email, name: mockUser.name };
    setUser(loggedInUser);
    navigate('/account'); // 登入成功後跳轉到個人頁面
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true }); // 登出後跳轉回主頁
  };
  
  const value = useMemo(() => ({
    user,
    login,
    logout,
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 創建 useAuth 這個 Hook，讓其他組件可以輕鬆獲取 context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
