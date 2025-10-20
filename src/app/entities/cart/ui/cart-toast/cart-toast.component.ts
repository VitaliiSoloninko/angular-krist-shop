import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-toast',
  imports: [CommonModule],
  templateUrl: './cart-toast.component.html',
  styleUrl: './cart-toast.component.scss',
})
export class CartToastComponent {
  isOpen = input<boolean>(false);
  close = output<void>();
  checkout = output<void>();

  onCheckout() {
    this.checkout.emit();
    this.close.emit();
  }
}
