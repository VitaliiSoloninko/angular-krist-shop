import { Component } from '@angular/core';
import { QuantityControlComponent } from '../../../../shared/ui/quantity-control/quantity-control.component';

@Component({
  selector: 'app-cart-item',
  imports: [QuantityControlComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  quantity = 1;

  onQuantityChange(newQuantity: number) {
    this.quantity = newQuantity;
  }
}
