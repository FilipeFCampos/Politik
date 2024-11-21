import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  currentRoute: string = ''; // Store the current route

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to get the current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects; // Get the final redirected URL
        console.log('Current Route:', this.currentRoute);
      }
    });
  }
}

