export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface ProductRatingProps {
  rating: number;
  totalReviews: number;
}
