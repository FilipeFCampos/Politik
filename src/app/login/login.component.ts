import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, RouterLink] 
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.login === 'fulanodetal@email.com' && this.password === '1234') {
      this.router.navigate(['/feed/candidato/editar']);
    } else {
      alert('Login ou senha incorretos');
    }
  }
}
