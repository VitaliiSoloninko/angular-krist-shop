import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  product = {
    image:
      'https://static.pullandbear.net/2/photos//2023/I/0/2/p/6682/312/427/6682312427_2_1_8.jpg',
    title: 'Skinny Fit Jeans',
    rating: 3.5,
    price: 240,
    oldPrice: 260,
    discount: 20,
  };
}
