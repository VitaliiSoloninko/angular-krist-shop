import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductFilterGroupComponent } from '../product-filter-group/product-filter-group.component';

export interface FilterGroup {
  title: string;
  options: string[];
  key: string;
}

@Component({
  selector: 'app-product-filters',
  imports: [NgFor, NgIf, ProductFilterGroupComponent],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss',
})
export class ProductFiltersComponent {
  @Input() filterGroups: FilterGroup[] = [];
  @Input() selectedFilters: { [key: string]: string } = {};
  @Output() filterSelected = new EventEmitter<{
    group: string;
    value: string;
  }>();
  @Output() reset = new EventEmitter<void>();

  collapsed = false;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  onFilterSelected(event: { group: string; value: string }) {
    this.filterSelected.emit(event);
  }

  resetFilters() {
    this.reset.emit();
  }
}
