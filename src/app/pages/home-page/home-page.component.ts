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
  newProducts: Product[] = [];
  topRatedProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.newProducts = this.productService.getNewestProducts(4);
    this.topRatedProducts = this.productService.getTopRatedProducts(4);
  }

  navigateToProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
}
