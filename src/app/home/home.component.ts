import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  welcomeMessage: string = '';

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      switch (this.currentUser.role) {
        case 'administrador':
          this.welcomeMessage = '¡Bienvenido Administrador!';
          break;
        case 'usuario':
          this.welcomeMessage = '¡Bienvenido Usuario!';
          break;
        case 'invitado':
          this.welcomeMessage = '¡Bienvenido Invitado!';
          break;
        default:
          this.welcomeMessage = '¡Bienvenido!';
          break;
      }
    }
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isUser(): boolean {
    return this.authService.isUser();
  }

  isGuest(): boolean {
    return this.authService.isGuest();
  }

  logout () {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
