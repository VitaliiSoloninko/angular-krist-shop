import { Component } from '@angular/core';
import { FILTER_GROUPS } from '../../data/filter-groups.data';
import { PRODUCTS } from '../../data/products.data';
import { ProductFiltersComponent } from '../../entities/product/ui/product-filters/product-filters.component';
import { ProductListComponent } from '../../entities/product/ui/product-list/product-list.component';

@Component({
  selector: 'app-all-products',
  imports: [ProductListComponent, ProductFiltersComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent {
  products = PRODUCTS;
  filterGroups = FILTER_GROUPS;
}
