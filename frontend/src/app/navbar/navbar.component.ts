import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, LoginComponent, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  currentRoute: string = ''; // Rota atual
  searchTerm: string = ''; // Termo da busca
  searchResults: any[] = []; // Resultados da busca

  private apiUrl = 'http://127.0.0.1:8000/api/feed/'; // Endpoint da API

  constructor(private router: Router, private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.dataService.changeData(this.searchTerm);
      this.router.navigate(['/feed']);
    }
  }

  toggle(): void {
    document.body.classList.toggle('alto-contraste');
  }
}