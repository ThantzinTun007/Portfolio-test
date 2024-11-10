import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent {
  sidebarOpen: boolean = false;

  @ViewChild('aboutMeSection', { static: false }) aboutMeSection!: ElementRef;

  scrollToSection() {
    this.aboutMeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeToggle(): void {
    this.sidebarOpen = false;
  }
}
