import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gray-line',
  template: `<div class="divider" [style.margin]="margin()"></div>`,
  styleUrl: './gray-line.component.scss',
})
export class GrayLineComponent {
  margin = input<string>('1.5rem 0');
}
