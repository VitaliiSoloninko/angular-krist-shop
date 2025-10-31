export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  oldPrice?: number | null;
  discount?: number | null;
  typeId: number;
  brandId: number;
  createdAt: string;
}
