import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-size-selector',
  imports: [],
  templateUrl: './size-selector.component.html',
  styleUrl: './size-selector.component.scss',
})
export class SizeSelectorComponent {
  sizes = input<string[]>([]);
  selectedSize = input<string>('');
  sizeSelected = output<string>();

  onSizeSelect(size: string) {
    this.sizeSelected.emit(size);
  }
}
