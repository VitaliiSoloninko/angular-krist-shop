import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/ui/modal/modal.component';

@Component({
  selector: 'app-modal-test',
  imports: [ModalComponent],
  templateUrl: './modal-test.component.html',
  styleUrl: './modal-test.component.scss',
})
export class ModalTestComponent {
  showAlert = false;
  showConfirm = false;

  openAlert() {
    this.showAlert = true;
  }

  openConfirm() {
    this.showConfirm = true;
  }

  onConfirm() {
    console.log('Confirmed!');
    this.showConfirm = false;
  }

  onCancel() {
    console.log('Cancelled!');
    this.showConfirm = false;
  }
}
