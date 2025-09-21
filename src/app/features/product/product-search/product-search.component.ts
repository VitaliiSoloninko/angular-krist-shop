import { Component, EventEmitter, Output } from '@angular/core';
import { SearchInputComponent } from '../../../shared/ui/search-input/search-input.component';

@Component({
  selector: 'app-product-search',
  imports: [SearchInputComponent],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  searchValue = '';

  @Output() search = new EventEmitter<string>();

  onSearchChange(value: string) {
    this.searchValue = value;
    this.search.emit(value);
  }
}
