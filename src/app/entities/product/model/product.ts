export interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
}
