import { Component, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../../../../shared/ui/inputs/text-input/text-input.component';
import { UserAddress } from '../../model/user-address';

@Component({
  selector: 'app-address-form',
  imports: [ReactiveFormsModule, TextInputComponent],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  addressForm: FormGroup;
  addressChange = output<UserAddress>();

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
    });

    this.addressForm.valueChanges.subscribe((value: UserAddress) => {
      this.addressChange.emit(value);
    });
  }
}
