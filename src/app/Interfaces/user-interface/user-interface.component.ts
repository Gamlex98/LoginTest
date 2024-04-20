import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {

  constructor (private router: Router) {}

  navigateToLogin(): void {
    // Navegar de regreso al formulario de inicio de sesión (LoginComponent)
    this.router.navigate(['/login']);
  }
  
}
