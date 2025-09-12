import { Component, EventEmitter, input, Input, Output } from '@angular/core';
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
  @Output() productClick = new EventEmitter<Product>();
}
