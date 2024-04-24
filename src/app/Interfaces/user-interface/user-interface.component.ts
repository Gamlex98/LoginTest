import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {

  constructor (private router: Router , private authservice: AuthService) {}

  navigateToLogin(): void {
    // Cerrar sesión antes de navegar de regreso al formulario de inicio de sesión
    this.authservice.logout();

    // Navegar de regreso al formulario de inicio de sesión (LoginComponent)
    this.router.navigate(['/login']);
  }

  volverHome() {
    this.router.navigate(["/home"]);
  }
  
}
