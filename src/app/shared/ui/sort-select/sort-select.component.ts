import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-select',
  imports: [],
  templateUrl: './sort-select.component.html',
  styleUrl: './sort-select.component.scss',
})
export class SortSelectComponent {
  @Input() sortBy: string = '';
  @Input() sortOptions: { value: string; label: string }[] = [];
  @Output() sortChange = new EventEmitter<string>();

  onSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortChange.emit(value);
  }
}
