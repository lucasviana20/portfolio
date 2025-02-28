import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbar = ['Home', 'Education', 'Languages', 'Certifications', 'Projects', 'Experience', 'More About Me'];
}
