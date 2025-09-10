import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './entities/product/model/product';
import { ProductCardComponent } from './entities/product/ui/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageUrl = '/images/products/';

  products: Product[] = [
    {
      id: 1,
      image: this.imageUrl + '1.jpg',
      title: 'Gradient Graphic T-shirt',
      rating: 3.5,
      price: 145,
      oldPrice: null,
      discount: null,
    },
    {
      id: 2,
      image: this.imageUrl + '2.jpg',
      title: 'Polo with Tipping Details',
      rating: 4.5,
      price: 180,
      oldPrice: null,
      discount: null,
    },
    {
      id: 3,
      image: this.imageUrl + '3.jpg',
      title: 'Black Striped T-shirt',
      rating: 5.0,
      price: 120,
      oldPrice: 150,
      discount: 30,
    },
    {
      id: 4,
      image: this.imageUrl + '4.jpg',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      price: 240,
      oldPrice: 260,
      discount: 20,
    },
    {
      id: 5,
      image: this.imageUrl + '5.jpg',
      title: 'Checkered Shirt',
      rating: 4.5,
      price: 180,
      oldPrice: null,
      discount: null,
    },
    {
      id: 6,
      image: this.imageUrl + '6.jpg',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      price: 130,
      oldPrice: 160,
      discount: 30,
    },
    {
      id: 7,
      image: this.imageUrl + '7.jpg',
      title: 'Vertical Striped Shirt',
      rating: 5.0,
      price: 212,
      oldPrice: 232,
      discount: 20,
    },
    {
      id: 8,
      image: this.imageUrl + '8.jpg',
      title: 'Courage Graphic T-shirt',
      rating: 4.0,
      price: 145,
      oldPrice: null,
      discount: null,
    },
    {
      id: 9,
      image: this.imageUrl + '9.jpg',
      title: 'Loose Fit Bermuda Shorts',
      rating: 3.0,
      price: 80,
      oldPrice: null,
      discount: null,
    },
  ];
}
