import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-add-button',
  imports: [],
  templateUrl: './admin-add-button.component.html',
  styleUrl: './admin-add-button.component.scss',
})
export class AdminAddButtonComponent {
  @Input() ariaLabel?: string = 'Add new item';

  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
