import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BurgerMenuComponent } from '../../../shared/ui/burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, BurgerMenuComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
