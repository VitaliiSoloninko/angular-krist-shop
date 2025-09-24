import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filter-group-ui',
  imports: [],
  templateUrl: './filter-group-ui.component.html',
  styleUrl: './filter-group-ui.component.scss',
})
export class FilterGroupUiComponent {
  title = input<string>();
  options = input<string[]>([]);
  selectedValue = input<string | null>(null);
  groupKey = input<string>('');
  expanded = input<boolean>(false);

  select = output<{ group: string; value: string }>();
  toggle = output<void>();

  onToggle() {
    this.toggle.emit();
  }

  onSelect(option: string) {
    this.select.emit({ group: this.groupKey(), value: option });
  }
}
