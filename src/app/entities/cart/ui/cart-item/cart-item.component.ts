import { CurrencyPipe } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
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
  quantityChanged = output<{ id: string; quantity: number }>();
  itemRemoved = output<string>();

  quantitySize: 'medium' | 'small' = 'medium';

  updateQuantitySize() {
    if (window.innerWidth < 480) this.quantitySize = 'small';
    else this.quantitySize = 'medium';
  }

  quantity = computed(() => this.cartItem()?.quantity || 1);

  onQuantityChange(newQuantity: number): void {
    const item = this.cartItem();
    if (item) {
      this.quantityChanged.emit({
        id: item.id,
        quantity: newQuantity,
      });
    }
  }

  onRemoveItem(): void {
    const item = this.cartItem();
    if (item) {
      this.itemRemoved.emit(item.id);
    }
  }
}
