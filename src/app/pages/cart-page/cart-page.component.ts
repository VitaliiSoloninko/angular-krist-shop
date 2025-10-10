import { Component } from '@angular/core';
import { CartItemComponent } from '../../entities/cart/ui/cart-item/cart-item.component';

@Component({
  selector: 'app-cart-page',
  imports: [CartItemComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {}
