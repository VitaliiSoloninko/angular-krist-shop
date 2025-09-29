import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component, input, output } from '@angular/core';

export interface AuthFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  // Inputs for configuration
  title = input<string>('Welcome 👋');
  subtitle = input<string>('Please sign in to your account');
  submitButtonText = input<string>('Login');
  showRememberMe = input<boolean>(true);
  showForgotPassword = input<boolean>(true);

  // Outputs for events
  formSubmit = output<AuthFormData>();
  forgotPasswordClick = output<void>();

  // Form state
  loginForm: FormGroup;
  showPassword = false;
  isLoading = input<boolean>(false);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }
  // Check if field is invalid and touched
  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  // Toggle password visibility
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  // Handle forgot password click
  onForgotPasswordClick(): void {
    this.forgotPasswordClick.emit();
  }

  // Handle form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.formSubmit.emit(this.loginForm.value);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }
}
