import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { QuantityControlComponent } from '../../../../shared/ui/quantity-control/quantity-control.component';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-cart-item',
  imports: [QuantityControlComponent, CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cartItem = input<CartItem>();
  quantity = 1;

  onQuantityChange(newQuantity: number) {
    this.quantity = newQuantity;
  }
}
