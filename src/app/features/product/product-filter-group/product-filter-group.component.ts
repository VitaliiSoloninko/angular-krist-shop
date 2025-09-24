import { Component, input, output } from '@angular/core';
import { FilterGroupUiComponent } from '../../../shared/ui/filter-group-ui/filter-group-ui.component';

@Component({
  selector: 'app-product-filter-group',
  imports: [FilterGroupUiComponent],
  templateUrl: './product-filter-group.component.html',
  styleUrl: './product-filter-group.component.scss',
})
export class ProductFilterGroupComponent {
  title = input<string>();
  options = input<string[]>([]);
  groupKey = input<string>('');
  selectedValue = input<string | null>(null);
  select = output<{ group: string; value: string }>();

  expanded = true;

  toggle() {
    this.expanded = !this.expanded;
  }

  onSelect(event: { group: string; value: string }) {
    this.select.emit(event);
  }
}
