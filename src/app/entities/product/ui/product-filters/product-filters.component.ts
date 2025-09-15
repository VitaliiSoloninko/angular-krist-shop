import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface FilterGroup {
  title: string;
  options: string[];
  key: string;
}

@Component({
  selector: 'app-product-filters',
  imports: [NgFor, NgIf],
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

  collapsed = false;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
