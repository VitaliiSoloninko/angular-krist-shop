import { Component } from '@angular/core';
import { AllProductsComponent } from '../../widgets/all-products/all-products.component';

@Component({
  selector: 'app-product-catalog-page',
  imports: [AllProductsComponent],
  templateUrl: './product-catalog-page.component.html',
  styleUrl: './product-catalog-page.component.scss',
})
export class ProductCatalogPageComponent {}
