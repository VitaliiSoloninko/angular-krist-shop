import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isSidebarSmall = input.required<boolean>();
  changeSidebarState = output<boolean>();

  menuItems = [
    {
      routerLink: 'products',
      icon: '/images/svg/admin/shirt.svg',
      linkText: 'Products',
    },
    {
      routerLink: 'brands',
      icon: '/images/svg/admin/chromium.svg',
      linkText: 'Brands',
    },
    {
      routerLink: 'types',
      icon: '/images/svg/admin/type.svg',
      linkText: 'Types',
    },
    {
      routerLink: 'users',
      icon: '/images/svg/admin/users.svg',
      linkText: 'Users',
    },
    {
      routerLink: 'orders',
      icon: '/images/svg/admin/list-ordered.svg',
      linkText: 'Orders',
    },
    {
      routerLink: 'dashboard',
      icon: '/images/svg/admin/dashboard.svg',
      linkText: 'Dashboard',
    },
    {
      routerLink: 'settings',
      icon: '/images/svg/admin/settings.svg',
      linkText: 'Settings',
    },
    {
      routerLink: '/',
      icon: '/images/svg/admin/house.svg',
      linkText: 'Home page',
    },
    {
      routerLink: '/catalog',
      icon: '/images/svg/admin/shop.svg',
      linkText: 'Catalog page',
    },
  ];

  toggleSidebarLogo(): void {
    this.changeSidebarState.emit(!this.isSidebarSmall());
  }

  closeSidebar(): void {
    this.changeSidebarState.emit(true);
  }
}
