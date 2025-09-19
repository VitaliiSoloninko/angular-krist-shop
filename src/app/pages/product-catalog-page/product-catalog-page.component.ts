import { Component } from '@angular/core';
import { ProductsCatalogComponent } from '../../widgets/products-catalog/products-catalog.component';

@Component({
  selector: 'app-product-catalog-page',
  imports: [ProductsCatalogComponent],
  templateUrl: './product-catalog-page.component.html',
  styleUrl: './product-catalog-page.component.scss',
})
export class ProductCatalogPageComponent {}
