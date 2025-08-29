import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center bg-gray-50 py-12 px-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Create Account</h1>
        <p className="text-gray-600 mb-8">This feature is coming soon!</p>
        <Link 
            to="/login" 
            className="text-sm font-semibold text-white bg-gray-800 hover:bg-black px-6 py-3"
        >
            Back to Login
        </Link>
    </div>
  );
};

export default RegisterPage;
