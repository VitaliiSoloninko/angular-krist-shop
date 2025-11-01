import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../entities/product/api/product.service';
import { Product } from '../../entities/product/model/product';
import { ProductListComponent } from '../../entities/product/ui/product-list/product-list.component';

@Component({
  selector: 'app-home-page',
  imports: [ProductListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  newArrivalsCount = 4;
  topRatedCount = 4;

  constructor(private productService: ProductService, private router: Router) {}

  navigateToProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  get newProducts() {
    return this.productService.getNewestProducts(this.newArrivalsCount);
  }

  get topRatedProducts() {
    return this.productService.getTopRatedProducts(this.topRatedCount);
  }

  showMoreNewArrivals() {
    this.newArrivalsCount += 4;
  }

  showMoreTopRated() {
    this.topRatedCount += 4;
  }
}
