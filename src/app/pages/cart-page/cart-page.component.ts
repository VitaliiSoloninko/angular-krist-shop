import { Component } from '@angular/core';
import { CartItem } from '../../entities/cart/model/cart-item';
import { CartItemComponent } from '../../entities/cart/ui/cart-item/cart-item.component';
import { CartListComponent } from '../../entities/cart/ui/cart-list/cart-list.component';

@Component({
  selector: 'app-cart-page',
  imports: [CartItemComponent, CartListComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  cartItems: CartItem[] = [
    {
      id: '1',
      product: {
        id: 1,
        img: '/images/products/1.jpg',
        name: 'Gradient Graphic T-shirt',
        rating: 3.5,
        price: 145,
        oldPrice: null,
        discount: null,
        typeId: 1,
        brandId: 1,
      },
      selectedSize: 'Large',
      selectedColor: 'Black',
      quantity: 1,
      maxQuantity: 10,
      addedAt: new Date('2024-01-15T10:30:00'),
    },
    {
      id: '2',
      product: {
        id: 2,
        img: '/images/products/2.jpg',
        name: 'Polo with Tipping Details',
        rating: 4.5,
        price: 180,
        oldPrice: null,
        discount: null,
        typeId: 2,
        brandId: 2,
      },
      selectedSize: 'Medium',
      quantity: 2,
      maxQuantity: 5,
      addedAt: new Date('2024-01-16T14:20:00'),
    },
    {
      id: '3',
      product: {
        id: 3,
        img: '/images/products/3.jpg',
        name: 'Black Striped T-shirt',
        rating: 5.0,
        price: 120,
        oldPrice: 150,
        discount: 30,
        typeId: 1,
        brandId: 2,
      },
      selectedSize: 'X-Large',
      selectedColor: 'Blue',
      quantity: 1,
      maxQuantity: 8,
      addedAt: new Date('2024-01-17T09:15:00'),
    },
  ];
}
