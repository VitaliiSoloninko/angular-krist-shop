import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dress-style-section',
  imports: [],
  templateUrl: './dress-style-section.component.html',
  styleUrl: './dress-style-section.component.scss',
})
export class DressStyleSectionComponent {
  private router = inject(Router);

  navigateToStyle(style: string) {
    this.router.navigate(['/catalog'], {
      queryParams: { type: style },
    });
  }
}
