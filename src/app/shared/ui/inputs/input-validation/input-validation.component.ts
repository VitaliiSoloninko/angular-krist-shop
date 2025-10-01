import {
  Component,
  input,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES: Record<string, string> = {
  required: 'Should not be empty',
  email: 'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Password and confirm does not match',
};

@Component({
  selector: 'app-input-validation',
  imports: [],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.scss',
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input()
  control!: AbstractControl;
  showErrorsWhen = input<boolean>(true);
  errorMessages = signal<string[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  checkValidation() {
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages.set([]);
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages.set(errorKeys.map((key) => VALIDATORS_MESSAGES[key]));
  }
}
