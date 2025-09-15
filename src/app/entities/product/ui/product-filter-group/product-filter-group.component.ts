import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter-group',
  imports: [NgFor, NgIf],
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
}
