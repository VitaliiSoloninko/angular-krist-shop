import { Component, input, Input } from '@angular/core';
import { Product } from '../../model/product';
import { StarRatingComponent } from '../../../../shared/star-rating/star-rating.component';

@Component({
  selector: 'app-product-card',
  imports: [StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input<Product>({} as Product);
}
