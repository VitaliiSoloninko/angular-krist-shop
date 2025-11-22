import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../../../../shared/ui/inputs/text-input/text-input.component';
import { UserState } from '../../model/user.state';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  public userState = inject(UserState);

  profileForm!: FormGroup;
  isSubmitted = false;

  ngOnInit(): void {
    const user = this.userState.currentUser();

    this.profileForm = this.fb.group({
      firstName: [user?.firstName || '', Validators.required],
      lastName: [user?.lastName || '', Validators.required],
      street: [user?.street || ''],
      city: [user?.city || ''],
      postalCode: [user?.postalCode || ''],
      country: [user?.country || ''],
    });
  }

  get fc() {
    return {
      firstName: this.profileForm.get('firstName')!,
      lastName: this.profileForm.get('lastName')!,
      street: this.profileForm.get('street')!,
      city: this.profileForm.get('city')!,
      postalCode: this.profileForm.get('postalCode')!,
      country: this.profileForm.get('country')!,
    };
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (this.profileForm.invalid) return;

    const update = this.profileForm.value;

    try {
      await this.userState.updateUserProfile(update);
      // Optionally show toast — kept minimal here
    } catch (err) {
      // error handled in UserState
      console.error('Profile update failed', err);
    }
  }
}
