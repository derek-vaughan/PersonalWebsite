import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as bootstrap from 'bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroContentComponent } from './intro-content/intro-content.component';
import { BioContentComponent } from './bio-content/bio-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ImpossibleComponent } from './impossible/impossible.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroContentComponent,
    BioContentComponent,
    NavbarComponent,
    FooterComponent,
    ImpossibleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
