import { Component, HostListener, OnInit, signal } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  imports: [SidebarComponent, MainComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  isSidebarSmall = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isSidebarSmall.set(true);
    }
  }

  ngOnInit(): void {
    this.isSidebarSmall.set(this.screenWidth() < 768);
  }

  changeSidebar(isSidebarSmall: boolean): void {
    this.isSidebarSmall.set(isSidebarSmall);
  }
}
