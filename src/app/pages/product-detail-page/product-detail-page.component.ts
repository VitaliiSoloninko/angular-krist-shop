import { Component } from '@angular/core';
import { ProductDetailComponent } from '../../widgets/product/product-detail/product-detail.component';

@Component({
  selector: 'app-product-detail-page',
  imports: [ProductDetailComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {}
