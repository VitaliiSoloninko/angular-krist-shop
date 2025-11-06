import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFormData } from '../../../widgets/auth-form/auth-form.component';
import { LoginFormComponent } from '../../../widgets/user/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  imports: [LoginFormComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  isLoading = false;

  // Handle login form submission
  onLogin(formData: AuthFormData): void {
    this.isLoading = true;
    console.log('Login data:', formData);

    // Mock login simulation
    setTimeout(() => {
      this.isLoading = false;
      alert('Login successful! (Mock)');
    }, 2000);
  }

  // Handle forgot password click
  onForgotPassword(): void {
    console.log('Forgot password clicked');
    alert('Redirect to forgot password page');
  }
}
