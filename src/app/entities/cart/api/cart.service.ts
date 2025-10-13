import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../product/model/product';
import { Cart, CartItem, CartSummary } from '../model/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Signal for cart items
  private cartItems = signal<CartItem[]>([]);

  // Computed signal for cart summary
  private cartSummary = computed(() => {
    const items = this.cartItems();
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const deliveryFee = 15;
    const discount = 0; // no discounts yet
    const discountPercentage = 0;
    const total = subtotal - discount + deliveryFee;

    return {
      subtotal,
      discount,
      discountPercentage,
      deliveryFee,
      total,
    } as CartSummary;
  });

  // Computed signal for complete cart
  cart = computed(
    () =>
      ({
        items: this.cartItems(),
        summary: this.cartSummary(),
      } as Cart)
  );

  // Computed signal for total items count
  itemsCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  constructor() {
    this.loadCartFromStorage();
  }

  // Add product to cart
  addToCart(
    product: Product,
    selectedSize: string,
    quantity: number,
    selectedColor?: string
  ): void {
    const currentItems = this.cartItems();
    if (!Array.isArray(currentItems)) {
      console.error('Cart items is not an array, resetting');
      this.cartItems.set([]);
      return this.addToCart(product, selectedSize, quantity, selectedColor);
    }

    // Check if item already exists in cart
    const existingItemIndex = currentItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
    );

    if (existingItemIndex >= 0) {
      // Increase quantity of existing item
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + quantity,
      };
      this.cartItems.set(updatedItems);
    } else {
      // Add new item to cart
      const newItem: CartItem = {
        id: this.generateItemId(),
        product,
        selectedSize,
        selectedColor,
        quantity,
        maxQuantity: 99,
        addedAt: new Date(),
      };
      this.cartItems.set([...currentItems, newItem]);
    }

    this.saveCartToStorage();
  }

  // Update item quantity
  updateQuantity(itemId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }

    const updatedItems = this.cartItems().map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    this.cartItems.set(updatedItems);
    this.saveCartToStorage();
  }

  // Remove item from cart
  removeFromCart(itemId: string): void {
    const updatedItems = this.cartItems().filter((item) => item.id !== itemId);
    this.cartItems.set(updatedItems);
    this.saveCartToStorage();
  }

  // Clear entire cart
  clearCart(): void {
    this.cartItems.set([]);
    this.saveCartToStorage();
  }

  // Get current cart state
  getCurrentCart(): Cart {
    return this.cart();
  }

  // Private methods
  private generateItemId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  private saveCartToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedItems = JSON.parse(savedCart);
        // Verify that data is an array
        if (Array.isArray(parsedItems)) {
          this.cartItems.set(parsedItems);
        } else {
          console.warn(
            'Invalid cart data in localStorage, resetting to empty array'
          );
          this.cartItems.set([]);
        }
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        this.cartItems.set([]); // Set empty array on error
      }
    }
  }
}
