import { Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product-catalog', pathMatch: 'full' },
  // { path: '**', redirectTo: '/product-catalog' },
  { path: 'product-catalog', component: ProductCatalogPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'cart', component: CartPageComponent },
];
