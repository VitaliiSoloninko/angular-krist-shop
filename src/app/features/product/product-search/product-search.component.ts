import { Component, output } from '@angular/core';
import { SearchInputComponent } from '../../../shared/ui/search-input/search-input.component';

@Component({
  selector: 'app-product-search',
  imports: [SearchInputComponent],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  searchValue = '';
  search = output<string>();

  onSearchChange(value: string) {
    this.searchValue = value;
    this.search.emit(value);
  }
}
