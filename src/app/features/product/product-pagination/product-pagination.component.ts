import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationComponent } from '../../../shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-product-pagination',
  imports: [PaginationComponent],
  templateUrl: './product-pagination.component.html',
  styleUrl: './product-pagination.component.scss',
})
export class ProductPaginationComponent {
  @Input() totalItems = 0;
  @Input() pageSize = 10;
  @Input() currentPage = 1;
  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
