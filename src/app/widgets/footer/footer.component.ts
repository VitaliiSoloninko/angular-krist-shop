import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../entities/cart/api/cart.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private cartService = inject(CartService);

  get cartItemsCount() {
    return this.cartService.itemsCount();
  }
}
