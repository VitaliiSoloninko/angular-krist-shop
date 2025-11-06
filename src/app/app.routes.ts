import { Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ProductCatalogPageComponent } from './pages/product-catalog-page/product-catalog-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { EmptyStateTestComponent } from './pages/test-pages/empty-state-test/empty-state-test.component';
import { ModalTestComponent } from './pages/test-pages/modal-test/modal-test.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'catalog', component: ProductCatalogPageComponent },
      { path: 'product/:id', component: ProductDetailPageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'checkout', component: CheckoutPageComponent },
      { path: 'payment', component: PaymentPageComponent },
      { path: 'success', component: SuccessPageComponent },
      { path: 'favorites', component: FavoritesPageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'modal', component: ModalTestComponent },
      { path: 'empty-state', component: EmptyStateTestComponent },
    ],
  },

  { path: 'login', component: LoginPageComponent },
];
