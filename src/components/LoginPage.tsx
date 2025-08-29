import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await auth.login({ email, password });
      // 成功登入後，useAuth hook 會自動跳轉
    } catch (err: any) {
      setError(err.message);
      if (err.message.includes("User does not exist")) {
        // 延遲跳轉，讓用戶看到提示
        setTimeout(() => {
          navigate('/register');
        }, 2000);
      }
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-md mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Login</h1>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* 錯誤提示 */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center" role="alert">
              <p>{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent font-semibold bg-gray-800 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              SIGN IN
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link to="/register" className="text-sm text-gray-600 hover:text-blue-500">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

