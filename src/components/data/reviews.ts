export interface Review {
  id: number;
  customerName: string;
  rating: number; // Rating, 1-5
  content: string;
  productId: number; // The product ID this review corresponds to
}

export const mockReviews: Review[] = [
  {
    id: 1,
    customerName: 'Sarah J.',
    rating: 5,
    content: 'This smartwatch is incredibly feature-rich and has a sleek, techy look. It\'s the best wearable I\'ve ever owned! Shipping was fast too. Highly recommended.',
    productId: 6,
  },
  {
    id: 2,
    customerName: 'Mike L.',
    rating: 4,
    content: 'The jeans have a great fit and are very slimming. The fabric is comfortable too. The only minor issue is that the color is a bit darker than in the picture, but overall, I\'m very satisfied.',
    productId: 1,
  },
  {
    id: 3,
    customerName: 'Emily P.',
    rating: 5,
    content: 'I bought this leather bag as a birthday gift for my husband, and he absolutely loves it. He says the quality is excellent and it looks very premium. The size is just right for his daily essentials.',
    productId: 2,
  },
];
