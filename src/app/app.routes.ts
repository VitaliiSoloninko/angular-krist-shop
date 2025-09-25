import { Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { ModalTestComponent } from './pages/modal-test/modal-test.component';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: ProductCatalogPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'modal', component: ModalTestComponent },
];
