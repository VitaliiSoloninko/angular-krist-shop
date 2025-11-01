import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { FILTER_GROUPS } from '../../../data/filter-groups.data';
import { ProductService } from '../../../entities/product/api/product.service';
import { Product } from '../../../entities/product/model/product';
import { ProductListComponent } from '../../../entities/product/ui/product-list/product-list.component';
import { ProductFiltersComponent } from '../../../features/product/product-filters/product-filters.component';
import { ProductPaginationComponent } from '../../../features/product/product-pagination/product-pagination.component';
import { ProductSearchComponent } from '../../../features/product/product-search/product-search.component';
import { ProductSortComponent } from '../../../features/product/product-sort/product-sort.component';
import { EmptyStateComponent } from '../../../shared/ui/empty-state/empty-state.component';
import { ModalComponent } from '../../../shared/ui/modal/modal.component';

@Component({
  selector: 'app-products-catalog',
  imports: [
    ProductFiltersComponent,
    ProductListComponent,
    ProductPaginationComponent,
    ProductSortComponent,
    ProductSearchComponent,
    ModalComponent,
    EmptyStateComponent,
  ],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.scss',
})
export class ProductsCatalogComponent {
  private router = inject(Router);
  private productService = inject(ProductService);
  allProducts = this.productService.getAllProducts();

  navigateToProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
  // --- FILTERS ---
  filterGroups = FILTER_GROUPS;
  selectedFilters: { [key: string]: string } = {};

  onFilterSelected(event: { group: string; value: string }) {
    this.selectedFilters[event.group] = event.value;
    this.applyFilters();
  }

  resetFilters() {
    this.selectedFilters = {};
    this.applyFilters();
    this.currentPage = 1;
  }

  // --- FILTERS MODAL ----
  showFiltersModal = false;

  openFiltersModal() {
    this.showFiltersModal = true;
  }

  closeFiltersModal() {
    this.showFiltersModal = false;
  }

  applyFiltersFromModal() {
    this.showFiltersModal = false;
  }

  // --- SEARCH ---
  searchValue = '';
  private searchSubject = new Subject<string>();
  private searchSub?: Subscription;

  ngOnInit() {
    // Initial sort
    this.sortProducts(this.sortBy);

    // Debounced search subscription
    this.searchSub = this.searchSubject
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.searchValue = value;
        this.applyFilters();
      });
  }

  onSearch(value: string) {
    this.searchSubject.next(value);
  }

  ngOnDestroy() {
    this.searchSub?.unsubscribe();
  }

  // --- FILTERING & SEARCHING ---
  filteredProducts = this.allProducts;

  applyFilters() {
    this.filteredProducts = this.productService.filterProducts(
      this.allProducts,
      this.selectedFilters,
      this.searchValue
    );
    this.currentPage = 1;
  }

  // --- PAGINATION ---
  pageSize = 12;
  currentPage = 1;

  get pagedProducts() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredProducts.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  // --- SORTING ---
  sortBy: string = 'price-asc';

  sortProducts(sortType: string) {
    this.sortBy = sortType;
    this.filteredProducts = this.productService.sortProducts(
      this.filteredProducts,
      sortType
    );
    this.goToPage(1);
  }
}
