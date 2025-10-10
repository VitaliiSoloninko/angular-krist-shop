import { Component, input, output } from '@angular/core';
import { Product } from '../../model/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = input<Product[]>([]);
  productClick = output<Product>();

  onProductClick(product: Product) {
    this.productClick.emit(product);
  }
}
