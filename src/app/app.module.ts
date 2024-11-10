import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [AppComponent, HomeScreenComponent, ContactUsComponent, AboutMeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
