import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-sort',
  imports: [],
  templateUrl: './products-sort.component.html',
  styleUrl: './products-sort.component.scss',
})
export class ProductsSortComponent {
  @Input() sortBy: string = 'price-asc';
  @Output() sortChange = new EventEmitter<string>();

  setSort(sortType: string) {
    this.sortChange.emit(sortType);
  }
}
