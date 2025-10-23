import { Component, input, output } from '@angular/core';
import { CartSummary } from '../../../entities/cart/model/cart-item';
import { GrayLineComponent } from '../../../shared/ui/gray-line/gray-line.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [GrayLineComponent, CurrencyPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent {
  cartSummary = input<CartSummary | null>(null);
  checkoutClicked = output<void>();

  onCheckout(): void {
    this.checkoutClicked.emit();
  }
}
