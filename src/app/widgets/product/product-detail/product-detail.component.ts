import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS_DATA } from '../../../data/products.data';
import { CartService } from '../../../entities/cart/api/cart.service';
import { Product } from '../../../entities/product/model/product';
import { GrayLineComponent } from '../../../shared/ui/gray-line/gray-line.component';
import { ModalComponent } from '../../../shared/ui/modal/modal.component';
import { QuantityControlComponent } from '../../../shared/ui/quantity-control/quantity-control.component';
import { SizeSelectorComponent } from '../../../shared/ui/size-selector/size-selector.component';
import { CartToastComponent } from '../../../entities/cart/ui/cart-toast/cart-toast.component';

@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    SizeSelectorComponent,
    QuantityControlComponent,
    GrayLineComponent,
    ModalComponent,
    CartToastComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  sizes = ['Small', 'Medium', 'Large', 'X-Large'];
  selectedSize = 'Large';
  quantity = 1;

  isToastOpen = false;
  private toastTimeout: any;

  route = inject(ActivatedRoute);
  cartService = inject(CartService);
  router = inject(Router);

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product =
        PRODUCTS_DATA.rows.find((p) => p.id.toString() === productId) || null;
    }
  }

  get currentPrice() {
    return this.product?.price || 0;
  }

  get originalPrice() {
    return this.product?.oldPrice || 0;
  }

  get discount() {
    if (!this.product?.oldPrice || !this.product?.price) return 0;
    return Math.round(
      ((this.product.oldPrice - this.product.price) / this.product.oldPrice) *
        100
    );
  }

  onSizeSelected(size: string) {
    this.selectedSize = size;
  }

  onQuantityChange(newQuantity: number) {
    this.quantity = newQuantity;
  }

  addToCart() {
    if (!this.product || !this.selectedSize || this.quantity <= 0) {
      alert('Please select size and quantity');
      return;
    }
    this.cartService.addToCart(this.product, this.selectedSize, this.quantity);

    this.isToastOpen = true;
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => this.onToastClose(), 2000);

    console.log('Added to cart:', {
      product: this.product,
      size: this.selectedSize,
      quantity: this.quantity,
      price: this.currentPrice,
    });
  }

  onToastClose() {
    this.isToastOpen = false;
    clearTimeout(this.toastTimeout);
  }

  goToCart() {
    this.onToastClose();
    this.router.navigate(['/cart']);
  }
}
