import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  isOpen = input(false);
  toggle = output<void>();
  close = output<void>();

  onToggle() {
    this.toggle.emit();
  }

  onClose() {
    this.close.emit();
  }
}
