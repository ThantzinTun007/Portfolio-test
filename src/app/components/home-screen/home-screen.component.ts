import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent {
  sidebarOpen: boolean = false;

  @ViewChild('aboutMeSection', { static: false }) aboutMeSection!: ElementRef;

  scrollToAboutme() {
    this.aboutMeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @ViewChild('homeSection', { static: false }) homeSection!: ElementRef;

  scrollToHome() {
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @ViewChild('educationSection', { static: false }) educationSection!: ElementRef;

  scrollToEducation() {
    this.educationSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeToggle(): void {
    this.sidebarOpen = false;
  }
}
