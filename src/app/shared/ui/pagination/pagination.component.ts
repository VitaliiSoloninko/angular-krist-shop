import { Component, input, OnChanges, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  totalItems = input<number>(0);
  pageSize = input<number>(10);
  currentPage = input<number>(1);
  pageChange = output<number>();
  totalPages = 1;
  pages: number[] = [];

  ngOnChanges() {
    this.totalPages = Math.ceil(this.totalItems() / this.pageSize()) || 1;
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.pageChange.emit(page);
  }
}
