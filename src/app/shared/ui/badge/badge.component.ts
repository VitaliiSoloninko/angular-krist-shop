import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  count = input<number>(0);
  maxCount = input<number>(9999);
  color = input<string>('#ff4444');
  position = input<'top-right' | 'top-left'>('top-right');

  get displayCount(): string {
    if (this.count() > this.maxCount()) {
      return `${this.maxCount()}+`;
    }
    return this.count().toString();
  }

  get shouldShow(): boolean {
    return this.count() > 0;
  }
}
