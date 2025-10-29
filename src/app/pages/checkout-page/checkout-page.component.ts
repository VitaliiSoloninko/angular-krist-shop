import { Component, inject } from '@angular/core';
import { CartService } from '../../entities/cart/api/cart.service';
import { UserAddress } from '../../entities/user/model/user-address';
import { AddressFormComponent } from '../../entities/user/ui/address-form/address-form.component';
import { OrderSummaryComponent } from '../../widgets/cart/order-summary/order-summary.component';

@Component({
  selector: 'app-checkout-page',
  imports: [OrderSummaryComponent, AddressFormComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
})
export class CheckoutPageComponent {
  userAddress: UserAddress | undefined;
  private cartService = inject(CartService);

  get cartSummary() {
    return this.cartService.cart().summary;
  }

  onAddressChange(address: UserAddress) {
    this.userAddress = address;
  }

  onCheckout() {
    const order = {
      address: this.userAddress,
      cart: this.cartService.cart(),
    };
    console.log('Order placed:', order);

    // this.router.navigate(['/order-confirmation'], { state: { order } });
  }
}
