import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
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
