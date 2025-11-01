import { Injectable } from '@angular/core';
import { BRANDS } from '../../../data/brands.data';
import { PRODUCTS_DATA } from '../../../data/products.data';
import { TYPES } from '../../../data/types.data';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAllProducts(): Product[] {
    return PRODUCTS_DATA.rows;
  }

  filterProducts(
    products: Product[],
    selectedFilters: { [key: string]: string },
    searchValue: string
  ): Product[] {
    return products.filter((product) => {
      // Filter by type
      if (selectedFilters['type']) {
        const type = TYPES.find((t) => t.name === selectedFilters['type']);
        if (!type || product.typeId !== type.id) return false;
      }
      // Filter by brand
      if (selectedFilters['brand']) {
        const brand = BRANDS.find((b) => b.name === selectedFilters['brand']);
        if (!brand || product.brandId !== brand.id) return false;
      }
      // Filter by search
      if (
        searchValue &&
        !product.name.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }

  sortProducts(products: Product[], sortType: string): Product[] {
    switch (sortType) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'rating-desc':
        return [...products].sort((a, b) => b.rating - a.rating);
      case 'newest':
        return [...products].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      default:
        return products;
    }
  }

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
