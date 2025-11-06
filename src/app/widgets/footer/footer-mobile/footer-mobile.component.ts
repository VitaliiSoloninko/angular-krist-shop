import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../entities/cart/api/cart.service';

@Component({
  selector: 'app-footer-mobile',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss',
})
export class FooterMobileComponent {
  private cartService = inject(CartService);

  get cartItemsCount() {
    return this.cartService.itemsCount();
  }
}
