import { Component } from '@angular/core';
import { FILTER_GROUPS } from '../../data/filter-groups.data';
import { PRODUCTS_DATA } from '../../data/products.data';
import { TYPES } from '../../data/types.data';
import { BRANDS } from '../../data/brands.data';
import { ProductFiltersComponent } from '../../entities/product/ui/product-filters/product-filters.component';
import { ProductsSortComponent } from '../../entities/product/ui/products-sort/products-sort.component';
import { ProductListComponent } from '../../entities/product/ui/product-list/product-list.component';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-products-catalog',
  imports: [
    ProductFiltersComponent,
    ProductsSortComponent,
    ProductListComponent,
    PaginationComponent,
  ],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.scss',
})
export class ProductsCatalogComponent {
  filterGroups = FILTER_GROUPS;
  selectedFilters: { [key: string]: string } = {};

  onFilterSelected(event: { group: string; value: string }) {
    this.selectedFilters[event.group] = event.value;
    this.applyFilters();
  }

  ngOnInit() {
    this.sortProducts(this.sortBy);
  }

  filteredProducts = PRODUCTS_DATA.rows;

  applyFilters() {
    this.filteredProducts = PRODUCTS_DATA.rows.filter((product) => {
      if (this.selectedFilters['type']) {
        const type = TYPES.find((t) => t.name === this.selectedFilters['type']);
        if (!type || product.typeId !== type.id) return false;
      }

      if (this.selectedFilters['brand']) {
        const brand = BRANDS.find(
          (b) => b.name === this.selectedFilters['brand']
        );
        if (!brand || product.brandId !== brand.id) return false;
      }
      return true;
    });
    this.currentPage = 1;
  }

  resetFilters() {
    this.selectedFilters = {};
    this.applyFilters();
    this.currentPage = 1;
  }

  pageSize = 10;
  currentPage = 1;

  get pagedProducts() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredProducts.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  sortBy: string = 'price-asc';

  sortProducts(sortType: string) {
    this.sortBy = sortType;
    switch (sortType) {
      case 'price-asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    this.goToPage(1);
  }
}
