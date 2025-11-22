import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { UserState } from '../../model/user.state';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  size = input<number>(80);
  userState = inject(UserState);
}
