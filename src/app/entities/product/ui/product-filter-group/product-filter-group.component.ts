import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-product-filter-group',
  imports: [NgFor, NgIf],
  templateUrl: './product-filter-group.component.html',
  styleUrl: './product-filter-group.component.scss',
})
export class ProductFilterGroupComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Input() options: string[] = [];
  @Input() groupKey!: string;
  @Input() selectedValue?: string;
  @Output() select = new EventEmitter<{ group: string; value: string }>();

  expanded = true;
  private resizeListener = () => this.updateExpanded();

  ngOnInit() {
    this.updateExpanded();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }

  updateExpanded() {
    this.expanded = window.innerWidth > 768;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
