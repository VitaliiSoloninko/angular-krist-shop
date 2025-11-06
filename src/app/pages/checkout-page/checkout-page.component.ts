import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../entities/cart/api/cart.service';
import { UserAddress } from '../../entities/user/model/user-address';
import { UserName } from '../../entities/user/model/user-name';
import { AddressFormComponent } from '../../entities/user/ui/address-form/address-form.component';
import { UserFormComponent } from '../../entities/user/ui/user-form/user-form.component';
import { OrderSummaryComponent } from '../../widgets/cart/order-summary/order-summary.component';
import { UserNameFormComponent } from '../../entities/user/ui/user-name-form/user-name-form.component';

@Component({
  selector: 'app-checkout-page',
  imports: [
    OrderSummaryComponent,
    AddressFormComponent,
    UserFormComponent,
    UserNameFormComponent,
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
})
export class CheckoutPageComponent {
  userName: UserName | undefined;
  userAddress: UserAddress | undefined;

  private router = inject(Router);
  private cartService = inject(CartService);

  get cartSummary() {
    return this.cartService.cart().summary;
  }

  onAddressChange(address: UserAddress) {
    this.userAddress = address;
  }

  onUserNameChange(userName: UserName) {
    this.userName = userName;
  }

  onCheckout() {
    const order = {
      user: this.userName,
      address: this.userAddress,
      cart: this.cartService.cart(),
    };
    console.log('Order placed:', order);

    this.router.navigate(['/payment'], { state: { order } });
  }
}
