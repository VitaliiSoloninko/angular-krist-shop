import { Product } from '../../product/model/product';

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: string;
  selectedColor?: string;
  quantity: number;
  maxQuantity?: number;
  addedAt?: Date;
}

export interface CartSummary {
  discount: number;
  discountPercentage?: number;
  deliveryFee: number;
  subtotal: number;
  total: number;
}

export interface Cart {
  items: CartItem[];
  summary: CartSummary;
}
