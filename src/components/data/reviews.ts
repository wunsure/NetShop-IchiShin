export interface Review {
  id: number;
  customerName: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  image?: string | null; // 评论图片是可选的
  productId: number;
}

// 详细评论列表
export const detailedReviews: Review[] = [
  {
    id: 1,
    customerName: 'Makenna',
    rating: 5,
    date: '08/15/2025',
    title: 'Super cute',
    content: "Love the peanut shape of this capybara and the way carries himself. I do believe that with the bigger yarn and bigger hook, some gaps are inevitable in the amigurumi, despite tight tension. I also wish the needle was not plastic. Each time I tried to stick it through and out the other side of my piece, it would bend around and it was hard to pull through the other side. I think if the needle was metal or more sturdy, this wouldn't be an issue.",
    image: 'https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg',
    productId: 6,
  },
  {
    id: 2,
    customerName: 'John Doe',
    rating: 4,
    date: '08/12/2025',
    title: 'Great Value!',
    content: "Excellent quality for the price. The fabric is soft and it fits perfectly. Shipped faster than expected. Would definitely recommend to anyone looking for stylish and comfortable wear.",
    image: null,
    productId: 1,
  },
   {
    id: 3,
    customerName: 'Jane Smith',
    rating: 5,
    date: '08/10/2025',
    title: 'Absolutely love it!',
    content: "The design is even better in person. I've received so many compliments already. The customer service was also fantastic when I had a question about sizing.",
    image: 'https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg',
    productId: 2,
  }
];

// 评论统计数据
export const reviewStats = {
  '5': 12,
  '4': 2,
  '3': 1,
  '2': 0,
  '1': 0,
};

// 顾客照片墙数据
export const customerPhotos = [
  'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
  'https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg',
  'https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg',
  'https://images.pexels.com/photos/772393/pexels-photo-772393.jpeg',
  'https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg',
  'https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg',
];
