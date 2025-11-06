import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TextInputComponent } from '../../../shared/ui/inputs/text-input/text-input.component';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, TextInputComponent, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  registerForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get fc() {
    return {
      firstName: this.registerForm.get('firstName')!,
      lastName: this.registerForm.get('lastName')!,
      email: this.registerForm.get('email')!,
      password: this.registerForm.get('password')!,
    };
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    console.log(this.registerForm.value);
  }
}
