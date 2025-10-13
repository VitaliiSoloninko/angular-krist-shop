import { Component } from '@angular/core';
import { CartService } from '../../entities/cart/api/cart.service';
import { CartItemComponent } from '../../entities/cart/ui/cart-item/cart-item.component';
import { GrayLineComponent } from '../../shared/ui/gray-line/gray-line.component';
import { OrderSummaryComponent } from '../../widgets/cart/order-summary/order-summary.component';

@Component({
  selector: 'app-cart-page',
  imports: [OrderSummaryComponent, CartItemComponent, GrayLineComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.cart().items;
  }

  get cartSummary() {
    return this.cartService.cart().summary;
  }

  onQuantityChange(event: { id: string; quantity: number }): void {
    this.cartService.updateQuantity(event.id, event.quantity);
  }

  onRemoveItem(itemId: string): void {
    this.cartService.removeFromCart(itemId);
  }

  onCheckout(): void {
    console.log('Proceeding to checkout with total:', this.cartSummary.total);
    console.log('Cart items:', this.cartItems);
  }
}
