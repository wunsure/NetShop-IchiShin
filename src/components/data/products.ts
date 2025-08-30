// 定義產品物件的介面（型別）
export type Category = 'SUV' | 'COLLABS' | 'BUNDLES' | 'SUMMERWEEN' | 'MERCH';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[]; // 使用圖片陣列
  description: string;
  longDescription?: string; // 可選的詳細描述
  category: Category;
  isNew?: boolean; // 可選的新品標記
  stock: number; // 1. 新增 stock 屬性
}

// 導出分類列表，方便在Navbar中使用
export const categories: Category[] = ['SUV', 'COLLABS', 'BUNDLES', 'SUMMERWEEN', 'MERCH'];

// 導出我們的產品資料
export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Classic Denim Jeans",
    price: 65.00,
    rating: 4.5,
    reviewCount: 120,
    stock: 10, // 2. 為每個商品添加庫存
    images: [
      "https://images.pexels.com/photos/54278/pexels-photo-54278.jpeg",
      "https://images.pexels.com/photos/21014/pexels-photo.jpg",
      "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg",
      "https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg",
      "https://images.pexels.com/photos/16446/pexels-photo.jpg",
      "https://images.pexels.com/photos/33659553/pexels-photo-33659553.jpeg",
    ],
    description: "A timeless pair of denim jeans, perfect for any occasion. Made with high-quality, durable fabric for a comfortable fit.",
    longDescription: "Crafted from premium 100% cotton denim, these classic straight-leg jeans offer both enduring style and exceptional comfort. The fabric is pre-washed for a soft, broken-in feel from the very first wear. Featuring a traditional five-pocket design, reinforced belt loops, and a secure zip fly with a button closure, these jeans are built to last. \n\nThe versatile medium-blue wash is achieved through a meticulous, eco-friendly process, giving each pair a unique character that will evolve over time. Whether dressed up with a blazer or down with a simple t-shirt, these jeans provide a clean, flattering silhouette that serves as the perfect foundation for any wardrobe.",
    category: "SUV"
  },
  {
    id: 2,
    name: "Leather Shoulder Bag",
    price: 120.00,
    rating: 5,
    reviewCount: 88,
    stock: 8,
    images: [
     
      "https://images.pexels.com/photos/1329310/pexels-photo-1329310.jpeg",
      "https://images.pexels.com/photos/7123071/pexels-photo-7123071.jpeg",
      "https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg",
       "https://images.pexels.com/photos/400951/pexels-photo-400951.jpeg",
      "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
      "https://images.pexels.com/photos/8828674/pexels-photo-8828674.jpeg",
      "https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1111322/pexels-photo-1111322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A beautifully crafted leather shoulder bag. Its minimalist design and exquisite details make it suitable for any event.",
    longDescription: "Elevate your accessory collection with this impeccably crafted shoulder bag, made from genuine, full-grain leather that will develop a rich patina over time. The structured silhouette is both modern and timeless, featuring clean lines and polished hardware for a touch of understated luxury. The main compartment, lined with soft yet durable twill, is surprisingly spacious and includes a secure interior zip pocket for your valuables and two slip pockets for easy organization.\n\nThe adjustable shoulder strap allows for versatile styling, letting you wear it comfortably on the shoulder or as a crossbody. Every detail, from the hand-stitched seams to the discreetly embossed logo, reflects a commitment to superior quality and craftsmanship. This bag is a statement of elegance that seamlessly transitions from day to night.",
    category: "COLLABS"
  },
  {
    id: 3,
    name: "Minimalist Sneakers",
    price: 85.00,
    rating: 4.0,
    reviewCount: 210,
    stock: 15,
    images: [
      "https://images.pexels.com/photos/8014548/pexels-photo-8014548.jpeg",
      "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "Lightweight and simple, these sneakers provide excellent cushioning and support for ultimate comfort during exercise.",
    longDescription: "Discover the perfect blend of style and performance with our Minimalist Sneakers. Engineered with a lightweight, breathable knit upper, these shoes conform to the shape of your foot for a sock-like fit and superior ventilation. The responsive foam midsole provides exceptional cushioning and energy return with every step, reducing fatigue and maximizing comfort whether you're on a run or navigating a busy day.\n\nThe durable rubber outsole features a versatile traction pattern for reliable grip on various surfaces. With their clean, uncluttered design and subtle branding, these sneakers are the epitome of modern athletic footwear, effortlessly pairing with everything from workout gear to casual weekend wear.",
    category: "BUNDLES"
  },
  {
    id: 4,
    name: "Vintage Sunglasses",
    price: 30.00,
    rating: 3.5,
    reviewCount: 55,
    stock: 20,
    images: [
      "https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg",
      "https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2835443/pexels-photo-2835443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2088164/pexels-photo-2088164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "Retro-designed sunglasses with UV protection lenses to protect your eyes and add a unique style to your look.",
    longDescription: "Channel timeless cool with these vintage-inspired sunglasses. The classic frame shape is universally flattering, crafted from a high-quality, lightweight acetate for all-day comfort. The durable construction features robust hinges and a smooth, polished finish that speaks to its quality.\n\nMore than just a style statement, these sunglasses offer serious protection. The high-performance lenses provide 100% UVA and UVB protection, safeguarding your eyes from harmful rays while reducing glare for crisp, clear vision. Whether you're driving, lounging on the beach, or exploring the city, these shades are the perfect accessory to elevate your style and protect your sight.",
    category: "SUMMERWEEN"
  },
  {
    id: 5,
    name: "Turtleneck Sweater",
    price: 45.00,
    rating: 4.8,
    reviewCount: 150,
    stock: 12,
    images: [
      "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1250599/pexels-photo-1250599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1597555/pexels-photo-1597555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3807955/pexels-photo-3807955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "Made with soft, skin-friendly knit fabric, this turtleneck is warm and fashionable—a must-have for the autumn and winter seasons.",
    longDescription: "Embrace sophistication and warmth with our classic turtleneck sweater. Knitted from an exceptionally soft and breathable merino wool blend, this sweater provides cozy insulation without feeling bulky. The fabric has a gentle stretch, ensuring a comfortable, flattering fit that moves with you.\n\nThe timeless turtleneck design is both elegant and practical, perfect for layering under a jacket or wearing on its own. Ribbed detailing at the collar, cuffs, and hem adds a touch of texture and helps retain the sweater's shape. This versatile piece is a cornerstone of any cold-weather wardrobe, offering endless styling possibilities for both casual and formal occasions.",
    category: "MERCH"
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 199.00,
    rating: 4.9,
    reviewCount: 300,
    stock: 5,
    images: [
      "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg",
      "https://images.pexels.com/photos/346804/pexels-photo-346804.jpeg",
      "https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg",
      "https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg",
    ],
    description: "A comprehensive smartwatch that tracks your health data, receives notifications, and supports multiple sports modes.",
    longDescription: "Stay connected, informed, and motivated with our next-generation Smart Watch. Featuring a vibrant, high-resolution AMOLED display, this watch delivers crisp visuals and an intuitive user interface. It's equipped with advanced sensors to track key health metrics, including heart rate, blood oxygen levels, sleep patterns, and stress, providing you with a holistic view of your well-being.\n\nReceive notifications for calls, texts, and apps directly on your wrist. With built-in GPS and support for over 100 sports modes, it's the perfect companion for any workout. The long-lasting battery ensures you can go for days without a charge. Encased in a sleek, durable aluminum alloy frame and paired with a comfortable silicone strap, this smartwatch combines cutting-edge technology with sophisticated style.",
    category: "SUV",
    isNew: true
  },
  {
    id: 7,
    name: "Wireless Bluetooth Earbuds",
    price: 59.00,
    rating: 4.2,
    reviewCount: 95,
    stock: 30,
    images: [ 
      "https://images.pexels.com/photos/772393/pexels-photo-772393.jpeg",
      "https://images.pexels.com/photos/13499735/pexels-photo-13499735.jpeg",
      "https://images.pexels.com/photos/3828253/pexels-photo-3828253.jpeg",
      "https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg",
      "https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg",
      "https://images.pexels.com/photos/33028688/pexels-photo-33028688.jpeg",
      "https://images.pexels.com/photos/54277/pexels-photo-54277.jpeg",
      "https://images.pexels.com/photos/1522185/pexels-photo-1522185.jpeg",
    ],
    description: "Compact and portable wireless Bluetooth earbuds with clear sound and long-lasting battery for high-quality music on the go.",
    longDescription: "Immerse yourself in crystal-clear audio with our True Wireless Bluetooth Earbuds. Utilizing the latest Bluetooth 5.2 technology, they provide a fast, stable, and seamless connection to your devices. The custom-tuned dynamic drivers deliver rich bass, balanced mids, and crisp highs, bringing your music to life. Each earbud is ergonomically designed for a secure and comfortable fit, perfect for long listening sessions, workouts, or commutes.\n\nThe compact charging case provides multiple additional charges, extending your total playtime to over 24 hours. With intuitive touch controls, you can easily manage your music, answer calls, and access your voice assistant without reaching for your phone. Experience true wireless freedom and exceptional sound quality.",
    category: "COLLABS",
    isNew: true
  },
  {
    id: 8,
    name: "Professional Coffee Machine",
    price: 350.00,
    rating: 5.0,
    reviewCount: 45,
    stock: 3,
    images: [
      "https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg",
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6803623/pexels-photo-6803623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2900307/pexels-photo-2900307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6355153/pexels-photo-6355153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6062136/pexels-photo-6062136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5945763/pexels-photo-5945763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/997725/pexels-photo-997725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A one-touch professional coffee machine that makes various coffee flavors, allowing you to enjoy café-level deliciousness at home.",
    longDescription: "Become your own barista with our Professional Coffee Machine. This elegant, high-performance espresso maker features a powerful 15-bar pump and an advanced thermoblock heating system, ensuring optimal temperature and pressure for a perfect extraction every time. The integrated conical burr grinder provides consistent, fresh grounds on demand, with adjustable settings to suit your taste.\n\nThe intuitive interface with a clear LCD screen makes it easy to select and customize your drink, from a robust espresso to a creamy latte. The powerful steam wand produces rich, velvety microfoam, perfect for latte art. Housed in a durable stainless steel body, this machine is as beautiful as it is functional, bringing the authentic café experience right into your kitchen.",
    category: "BUNDLES",
    isNew: true
  },
  {
    id: 9,
    name: "Urban Explorer Backpack",
    price: 75.00,
    rating: 4.7,
    reviewCount: 180,
    stock: 18,
    images: [
      "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1034645/pexels-photo-1034645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2304838/pexels-photo-2304838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A durable and stylish backpack designed for city life, with multiple compartments to keep your essentials organized.",
    longDescription: "Navigate the urban landscape with confidence with the Urban Explorer Backpack. Constructed from a water-resistant, high-density nylon fabric, this backpack is built to withstand the rigors of daily commuting and travel. The thoughtfully designed interior features a padded laptop sleeve that fits up to a 15-inch device, along with multiple organizer pockets for your phone, keys, and other accessories.\n\nThe ergonomic, padded shoulder straps and breathable back panel provide superior comfort, even when the bag is fully loaded. A secure, hidden pocket on the back offers a safe place for your wallet or passport. With its sleek, minimalist aesthetic and practical features, this backpack is the ideal choice for the modern professional, student, or traveler.",
    category: "SUMMERWEEN",
    isNew: true
  },
  {
    id: 10,
    name: "Graphic Print T-Shirt",
    price: 25.00,
    rating: 4.9,
    reviewCount: 450,
    stock: 50,
    images: [
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A comfortable cotton t-shirt featuring a unique, artistic graphic print. A perfect way to express your style.",
    longDescription: "Make a statement with our premium Graphic Print T-Shirt. Made from 100% ring-spun cotton, this tee is incredibly soft, breathable, and durable. The modern, athletic fit provides a flattering silhouette without being restrictive. The centerpiece of the shirt is a unique, high-quality graphic, printed using eco-friendly, water-based inks that are soft to the touch and resistant to cracking and fading.\n\nFeaturing a tagless neck label for added comfort and a reinforced shoulder seam for durability, this t-shirt is designed for everyday wear. It's a versatile piece that adds a touch of personality to any casual outfit, whether paired with jeans, shorts, or layered under a shirt.",
    category: "MERCH",
    isNew: true
  },
  {
    id: 11,
    name: "Cozy Wool Blanket",
    price: 90.00,
    rating: 4.8,
    reviewCount: 75,
    stock: 9,
    images: [
      "https://images.pexels.com/photos/4112598/pexels-photo-4112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6297087/pexels-photo-6297087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6434633/pexels-photo-6434633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4553363/pexels-photo-4553363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6489109/pexels-photo-6489109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5799831/pexels-photo-5799831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "Wrap yourself in warmth with this incredibly soft and cozy wool blanket, perfect for chilly evenings.",
    longDescription: "Experience unparalleled comfort with our Cozy Wool Blanket. Woven from a luxurious blend of natural wool and soft acrylic, this blanket offers the perfect balance of warmth, breathability, and durability. The generous size makes it ideal for snuggling on the couch, adding an extra layer of warmth to your bed, or even for outdoor picnics on a cool day.\n\nThe timeless herringbone pattern and classic fringed edges add a touch of rustic elegance to any home decor. The fabric is naturally hypoallergenic and resistant to pilling, ensuring it will remain a beautiful and comforting addition to your home for years to come. It's the perfect companion for relaxing moments and chilly nights.",
    category: "SUV",
    isNew: true
  },
  {
    id: 12,
    name: "Ceramic Coffee Mug",
    price: 18.00,
    rating: 5.0,
    reviewCount: 250,
    stock: 40,
    images: [
      "https://images.pexels.com/photos/1300325/pexels-photo-1300325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/159811/pexels-photo-159811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A beautifully designed ceramic mug with a comfortable handle, perfect for your favorite hot beverage.",
    longDescription: "Start your day right with our artisanal Ceramic Coffee Mug. Each mug is handcrafted by skilled potters, resulting in a unique piece with subtle variations in shape and glaze. Made from high-quality, durable stoneware, it's designed to retain heat, keeping your coffee or tea warm for longer. The ergonomic handle provides a comfortable and secure grip.\n\nThe mug features a beautiful, reactive glaze finish, creating a stunning visual texture that makes each sip a special experience. With its generous capacity, it's perfect for everything from your morning coffee to an evening hot chocolate. It's both microwave and dishwasher safe, combining artisanal beauty with everyday practicality.",
    category: "COLLABS",
    isNew: true
  },
  {
    id: 13,
    name: "Scented Soy Candle",
    price: 22.00,
    rating: 4.6,
    reviewCount: 112,
    stock: 25,
    images: [
      "https://images.pexels.com/photos/4202893/pexels-photo-4202893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4041122/pexels-photo-4041122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5864190/pexels-photo-5864190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7163618/pexels-photo-7163618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5674336/pexels-photo-5674336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6620831/pexels-photo-6620831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A hand-poured soy wax candle with a relaxing scent to create a calming atmosphere in any room.",
    longDescription: "Create a serene and inviting ambiance with our hand-poured Scented Soy Candle. Made from 100% natural soy wax and infused with premium fragrance oils, this candle provides a clean, long-lasting burn with a rich and consistent scent throw. The lead-free cotton wick ensures a safe and soot-free experience.\n\nThe sophisticated fragrance profile features calming notes of lavender and chamomile, blended with a hint of vanilla and sandalwood to create a truly relaxing atmosphere. Poured into a stylish, reusable glass vessel, this candle not only smells divine but also serves as a chic decorative accent. It's the perfect way to unwind after a long day or to add a touch of warmth and elegance to your home.",
    category: "BUNDLES",
    isNew: true
  },
   {
    id: 14,
    name: "Classic Denim Jeans v2",
    price: 65.00,
    rating: 4.5,
    reviewCount: 120,
    stock: 10,
    images: [
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1020324/pexels-photo-1020324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2002967/pexels-photo-2002967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A timeless pair of denim jeans, perfect for any occasion. Made with high-quality, durable fabric for a comfortable fit.",
    longDescription: "Crafted from premium 100% cotton denim, these classic straight-leg jeans offer both enduring style and exceptional comfort. The fabric is pre-washed for a soft, broken-in feel from the very first wear. Featuring a traditional five-pocket design, reinforced belt loops, and a secure zip fly with a button closure, these jeans are built to last. \n\nThe versatile medium-blue wash is achieved through a meticulous, eco-friendly process, giving each pair a unique character that will evolve over time. Whether dressed up with a blazer or down with a simple t-shirt, these jeans provide a clean, flattering silhouette that serves as the perfect foundation for any wardrobe.",
    category: "SUV"
  },
  {
    id: 15,
    name: "Leather Shoulder Bag v2",
    price: 120.00,
    rating: 5,
    reviewCount: 88,
    stock: 8,
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1927383/pexels-photo-1927383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1111322/pexels-photo-1111322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "A beautifully crafted leather shoulder bag. Its minimalist design and exquisite details make it suitable for any event.",
    longDescription: "Elevate your accessory collection with this impeccably crafted shoulder bag, made from genuine, full-grain leather that will develop a rich patina over time. The structured silhouette is both modern and timeless, featuring clean lines and polished hardware for a touch of understated luxury. The main compartment, lined with soft yet durable twill, is surprisingly spacious and includes a secure interior zip pocket for your valuables and two slip pockets for easy organization.\n\nThe adjustable shoulder strap allows for versatile styling, letting you wear it comfortably on the shoulder or as a crossbody. Every detail, from the hand-stitched seams to the discreetly embossed logo, reflects a commitment to superior quality and craftsmanship. This bag is a statement of elegance that seamlessly transitions from day to night.",
    category: "COLLABS"
  },
  {
    id: 16,
    name: "Minimalist Sneakers v2",
    price: 85.00,
    rating: 4.0,
    reviewCount: 210,
    stock: 15,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    description: "Lightweight and simple, these sneakers provide excellent cushioning and support for ultimate comfort during exercise.",
    longDescription: "Discover the perfect blend of style and performance with our Minimalist Sneakers. Engineered with a lightweight, breathable knit upper, these shoes conform to the shape of your foot for a sock-like fit and superior ventilation. The responsive foam midsole provides exceptional cushioning and energy return with every step, reducing fatigue and maximizing comfort whether you're on a run or navigating a busy day.\n\nThe durable rubber outsole features a versatile traction pattern for reliable grip on various surfaces. With their clean, uncluttered design and subtle branding, these sneakers are the epitome of modern athletic footwear, effortlessly pairing with everything from workout gear to casual weekend wear.",
    category: "BUNDLES"
  },
];

