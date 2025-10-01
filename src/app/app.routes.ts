import { Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';
import { EmptyStateTestComponent } from './pages/test-pages/empty-state-test/empty-state-test.component';
import { ModalTestComponent } from './pages/test-pages/modal-test/modal-test.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ProductCatalogPageComponent },
      { path: 'catalog', component: ProductCatalogPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'modal', component: ModalTestComponent },
      { path: 'empty-state', component: EmptyStateTestComponent },
    ],
  },

  { path: 'login', component: LoginPageComponent },
];
