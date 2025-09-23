import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterGroupUiComponent } from '../../../../shared/ui/filter-group-ui/filter-group-ui.component';

@Component({
  selector: 'app-product-filter-group',
  imports: [FilterGroupUiComponent],
  templateUrl: './product-filter-group.component.html',
  styleUrl: './product-filter-group.component.scss',
})
export class ProductFilterGroupComponent {
  @Input() title!: string;
  @Input() options: string[] = [];
  @Input() groupKey!: string;
  @Input() selectedValue?: string;
  @Output() select = new EventEmitter<{ group: string; value: string }>();

  expanded = true;

  toggle() {
    this.expanded = !this.expanded;
  }

  onSelect(event: { group: string; value: string }) {
    this.select.emit(event);
  }
}
