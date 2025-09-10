import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: {
    image: string;
    title: string;
    rating: number;
    price: number;
    oldPrice: number;
    discount: number;
  };

  getStarsArray(): number[] {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1);
  }
}
