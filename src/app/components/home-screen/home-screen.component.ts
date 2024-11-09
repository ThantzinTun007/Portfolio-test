import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent {
  sidebarOpen: boolean = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeToggle(): void {
    this.sidebarOpen = false;
  }
}
