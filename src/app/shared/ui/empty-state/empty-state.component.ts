import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-state',
  imports: [RouterLink],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
})
export class EmptyStateComponent {
  icon = input<string>('');
  title = input<string>('No results found');
  subtitle = input<string>('');

  showButton = input<boolean>(false);
  buttonText = input<string>('Go to Home');
  buttonClick = output<void>();
  // Route to navigate (optional)
  buttonRoute = input<string | null>('/');

  onButtonClick() {
    this.buttonClick.emit();
  }
}
