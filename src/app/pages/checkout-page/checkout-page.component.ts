import { Component, inject } from '@angular/core';
import { CartService } from '../../entities/cart/api/cart.service';
import { OrderSummaryComponent } from '../../widgets/cart/order-summary/order-summary.component';

@Component({
  selector: 'app-checkout-page',
  imports: [OrderSummaryComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
})
export class CheckoutPageComponent {
  private cartService = inject(CartService);

  get cartSummary() {
    return this.cartService.cart().summary;
  }

  onCheckout() {
    // this.router.navigate(['/order-confirmation']);
  }
}
