import { useAuth } from '../hooks/useAuth';

// 模擬的用戶歷史數據
const mockPurchaseHistory = [
  { id: 1, date: '2025-08-15', item: 'Smart Watch', total: '$199.00', status: 'Delivered' },
  { id: 2, date: '2025-07-22', item: 'Classic Denim Jeans', total: '$65.00', status: 'Delivered' },
];

const mockBrowsingHistory = [
  { id: 8, name: 'Professional Coffee Machine' },
  { id: 13, name: 'Scented Soy Candle' },
  { id: 5, name: 'Turtleneck Sweater' },
];


const AccountPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-12 px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
        <button 
          onClick={logout}
          className="text-sm text-gray-600 hover:text-blue-500"
        >
          Log out
        </button>
      </div>

      {/* 購買紀錄 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Purchase History</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockPurchaseHistory.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 瀏覽記錄 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recently Viewed</h2>
        <ul className="space-y-2">
            {mockBrowsingHistory.map(item => (
                <li key={item.id} className="text-gray-600 hover:text-blue-500">
                    <a href={`/products/${item.id}`}>{item.name}</a>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;
