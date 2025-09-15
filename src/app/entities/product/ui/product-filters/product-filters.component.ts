import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface FilterGroup {
  title: string; // Название группы фильтров (например, "Тип")
  options: string[]; // Список опций (например, ["T-shirts", "Shorts"])
  key: string; // Ключ для идентификации группы (например, "type")
}

@Component({
  selector: 'app-product-filters',
  imports: [CommonModule],
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
}
