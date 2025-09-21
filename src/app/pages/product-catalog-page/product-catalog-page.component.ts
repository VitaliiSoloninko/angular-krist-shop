import { Component } from '@angular/core';
import { ProductsCatalogComponent } from '../../widgets/products-catalog/products-catalog.component';
import { ProductSearchComponent } from '../../features/product/product-search/product-search.component';

@Component({
  selector: 'app-product-catalog-page',
  imports: [ProductsCatalogComponent, ProductSearchComponent],
  templateUrl: './product-catalog-page.component.html',
  styleUrl: './product-catalog-page.component.scss',
})
export class ProductCatalogPageComponent {}
