import { Injectable } from '@angular/core';
import { PRODUCTS_DATA } from '../../../data/products.data';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getNewestProducts(count: number = 4): Product[] {
    return [...PRODUCTS_DATA.rows]
      .sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
      .slice(0, count);
  }

  getTopRatedProducts(count: number = 4): Product[] {
    return [...PRODUCTS_DATA.rows]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count);
  }
}
