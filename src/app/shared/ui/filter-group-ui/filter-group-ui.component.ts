import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-group-ui',
  imports: [],
  templateUrl: './filter-group-ui.component.html',
  styleUrl: './filter-group-ui.component.scss',
})
export class FilterGroupUiComponent {
  @Input() title: string = '';
  @Input() options: string[] = [];
  @Input() selectedValue: string | null = null;
  @Input() groupKey: string = '';
  @Input() expanded: boolean = false;

  @Output() select = new EventEmitter<{ group: string; value: string }>();
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }

  onSelect(option: string) {
    this.select.emit({ group: this.groupKey, value: option });
  }
}
