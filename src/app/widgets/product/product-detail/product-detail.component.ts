import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS_DATA } from '../../../data/products.data';
import { Product } from '../../../entities/product/model/product';
import { SizeSelectorComponent } from '../../../shared/ui/size-selector/size-selector.component';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, SizeSelectorComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  sizes = ['Small', 'Medium', 'Large', 'X-Large'];
  selectedSize = 'Large';
  quantity = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product =
        PRODUCTS_DATA.rows.find((p) => p.id.toString() === productId) || null;
    }
  }
  // ДОБАВИТЬ геттеры для цен
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

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addToCart() {
    console.log('Added to cart:', {
      product: this.product,
      size: this.selectedSize,
      quantity: this.quantity,
      price: this.currentPrice,
    });
  }
}
