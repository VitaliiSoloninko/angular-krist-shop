import { Component, input, output } from '@angular/core';
import { SortSelectComponent } from '../../../shared/ui/sort-select/sort-select.component';

@Component({
  selector: 'app-product-sort',
  imports: [SortSelectComponent],
  templateUrl: './product-sort.component.html',
  styleUrl: './product-sort.component.scss',
})
export class ProductSortComponent {
  sortBy = input<string>('price-asc');
  sortChange = output<string>();

  sortOptions = [
    { value: 'price-asc', label: 'Price ↑' },
    { value: 'price-desc', label: 'Price ↓' },
    { value: 'name-asc', label: 'Name: A → Z' },
    { value: 'name-desc', label: 'Name: Z → A' },
    { value: 'rating-desc', label: 'Rating: ↓' },
    { value: 'newest', label: 'Newest' },
  ];
}
