import { Component, input, output } from '@angular/core';
import { CartSummary } from '../../../entities/cart/model/cart-item';
import { GrayLineComponent } from '../../../shared/ui/gray-line/gray-line.component';

@Component({
  selector: 'app-order-summary',
  imports: [GrayLineComponent],
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
