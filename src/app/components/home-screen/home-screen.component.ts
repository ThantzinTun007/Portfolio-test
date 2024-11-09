import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  countries = [
    { code: 'us', name: 'United States' },
    { code: 'fr', name: 'France' },
    { code: 'jp', name: 'Japan' },
    // Add more countries as needed
  ];

  // Default selected country
  selectedCountry = 'us';

  // Method to handle country change
  onCountryChange(countryCode: string) {
    this.selectedCountry = countryCode;
  }
}
