import { Component, input } from '@angular/core';
import { CartItem } from '../../model/cart-item';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { GrayLineComponent } from '../../../../shared/ui/gray-line/gray-line.component';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent, GrayLineComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
})
export class CartListComponent {
  cartItems = input<CartItem[]>([]);
}
