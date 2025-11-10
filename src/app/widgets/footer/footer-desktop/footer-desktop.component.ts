import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-desktop',
  imports: [],
  templateUrl: './footer-desktop.component.html',
  styleUrl: './footer-desktop.component.scss',
})
export class FooterDesktopComponent {
  currentYear: number = new Date().getFullYear();
}
