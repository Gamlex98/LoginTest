import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {

  constructor (private router: Router, private authservice:AuthService) {}
  users: any[] = [];

  ngOnInit(): void {
    this.authservice.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  volverHome() {
    this.router.navigate(["/home"]);
  }

  navigateToLogin(): void {
    // Cerrar sesión antes de navegar de regreso al formulario de inicio de sesión
    this.authservice.logout();

    // Navegar de regreso al formulario de inicio de sesión (LoginComponent)
    this.router.navigate(['/login']);
  }

}
