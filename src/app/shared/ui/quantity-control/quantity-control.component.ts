import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  imports: [],
  templateUrl: './quantity-control.component.html',
  styleUrl: './quantity-control.component.scss',
})
export class QuantityControlComponent {
  quantity = input<number>(1);
  minQuantity = input<number>(1);
  maxQuantity = input<number>(99);
  size = input<'medium' | 'small'>('medium');

  quantityChange = output<number>();

  increase() {
    const newQuantity = this.quantity() + 1;
    if (newQuantity <= this.maxQuantity()) {
      this.quantityChange.emit(newQuantity);
    }
  }

  decrease() {
    const newQuantity = this.quantity() - 1;
    if (newQuantity >= this.minQuantity()) {
      this.quantityChange.emit(newQuantity);
    }
  }
}
