import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent, NavbarComponent, HomeComponent,EducationComponent, LanguagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-site';
}
