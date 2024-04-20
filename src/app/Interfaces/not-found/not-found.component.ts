import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor (private router: Router) {}

  navigateToLogin(): void {
    // Navegar de regreso al formulario de inicio de sesión (LoginComponent)
    this.router.navigate(['/login']);
  }

}
