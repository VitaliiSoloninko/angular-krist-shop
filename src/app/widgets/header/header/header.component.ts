import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../entities/cart/api/cart.service';
import { BurgerMenuComponent } from '../../../shared/ui/burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, BurgerMenuComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  private cartService = inject(CartService);

  get cartItemsCount() {
    return this.cartService.itemsCount();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
