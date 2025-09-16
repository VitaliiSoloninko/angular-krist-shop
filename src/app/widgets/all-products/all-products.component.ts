import { Component } from '@angular/core';
import { BRANDS } from '../../data/brands.data';
import { FILTER_GROUPS } from '../../data/filter-groups.data';
import { PRODUCTS_DATA } from '../../data/products.data';
import { TYPES } from '../../data/types.data';
import { ProductFiltersComponent } from '../../entities/product/ui/product-filters/product-filters.component';
import { ProductListComponent } from '../../entities/product/ui/product-list/product-list.component';

@Component({
  selector: 'app-all-products',
  imports: [ProductListComponent, ProductFiltersComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent {
  filterGroups = FILTER_GROUPS;
  selectedFilters: { [key: string]: string } = {};

  onFilterSelected(event: { group: string; value: string }) {
    this.selectedFilters[event.group] = event.value;
    this.applyFilters();
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
  }
}
