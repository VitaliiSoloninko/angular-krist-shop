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
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A → Z' },
    { value: 'name-desc', label: 'Name: Z → A' },
    { value: 'rating-desc', label: 'Rating: High to Low' },
    { value: 'newest', label: 'Newest' },
  ];
}
