import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ProductFilterGroupComponent } from '../product-filter-group/product-filter-group.component';
export interface FilterGroup {
  title: string;
  options: string[];
  key: string;
}

@Component({
  selector: 'app-product-filters',
  imports: [ProductFilterGroupComponent],
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

  ngOnInit() {
    this.checkCollapse();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkCollapse();
  }

  private checkCollapse() {
    this.collapsed = window.innerWidth <= 768;
  }

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
