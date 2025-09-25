import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  isOpen = input<boolean>(false);
  title = input<string>('');
  type = input<'alert' | 'confirm'>('alert'); // Type of modal

  close = output<void>();
  confirm = output<void>();
  cancel = output<void>();

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
