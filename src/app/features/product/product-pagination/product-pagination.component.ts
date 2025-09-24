import { Component, input, output } from '@angular/core';
import { PaginationComponent } from '../../../shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-product-pagination',
  imports: [PaginationComponent],
  templateUrl: './product-pagination.component.html',
  styleUrl: './product-pagination.component.scss',
})
export class ProductPaginationComponent {
  totalItems = input<number>(0);
  pageSize = input<number>(10);
  currentPage = input<number>(1);
  pageChange = output<number>();

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
