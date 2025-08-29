import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    SHOP: ['Shipping', 'Returns', 'Stockists', 'Private workshops', 'Wholesale'],
    ABOUT: ['Our story', 'Blog', 'Jobs', 'Privacy policy', 'Terms and conditions', 'Accessibility Statement'],
    HELP: ['Kit Tutorials', 'Other Tutorials', 'Office hours', 'Help Center', 'Contact us'],
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', name: 'Facebook' },
    { Icon: Twitter, href: '#', name: 'Twitter' },
    { Icon: Instagram, href: '#', name: 'Instagram' },
    { Icon: Youtube, href: '#', name: 'YouTube' },
  ];
  
  // 模擬支付圖標的 URL
  const paymentIcons = [
    "https://img.shields.io/badge/American%20Express-273278?style=for-the-badge&logo=american-express&logoColor=white",
    "https://img.shields.io/badge/Apple%20Pay-000000?style=for-the-badge&logo=apple-pay&logoColor=white",
    "https://img.shields.io/badge/Google%20Pay-4285F4?style=for-the-badge&logo=google-pay&logoColor=white",
    "https://img.shields.io/badge/Mastercard-ECB33B?style=for-the-badge&logo=mastercard&logoColor=white",
    "https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white",
    "https://img.shields.io/badge/Shop%20Pay-5A31F4?style=for-the-badge&logo=shopify&logoColor=white",
    "https://img.shields.io/badge/Visa-142787?style=for-the-badge&logo=visa&logoColor=white"
  ];

  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto py-16 px-8">
        {/* 上半部分：導航和郵件訂閱 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-black transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <h3 className="font-bold uppercase tracking-wider mb-4">STAY IN THE LOOP</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black" 
              />
              <button className="bg-gray-800 text-white px-6 py-2 font-semibold hover:bg-black transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 下半部分：支付、社交和版權 */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto py-8 px-8 flex flex-col md:flex-row justify-between items-center text-center">
          {/* 支付方式 */}
          <div className="flex flex-wrap gap-2 justify-center mb-6 md:mb-0">
            {paymentIcons.map((src, index) => (
              <img key={index} src={src} alt="" className="h-6" />
            ))}
          </div>
          
          {/* 版權和地址 */}
          <div className="text-xs text-gray-500 order-last md:order-none mt-6 md:mt-0">
            <p>© 2025, ICHISHIN</p>
            <p>2-5-2 Kitatsumori Nishiku Osaka</p>
          </div>
          
          {/* 社交媒體 */}
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href, name }) => (
              <a key={name} href={href} aria-label={name} className="text-gray-500 hover:text-black transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
