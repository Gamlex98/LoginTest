import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe((success) => {
      if (success) {
        const currentUser = this.authService.getCurrentUser();
        if (currentUser) {
          console.log("Usuario:", this.username);
          console.log("Contraseña:", this.password);
          console.log('Rol del usuario:', currentUser.role);

          // Mostrar alerta de éxito
          Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            text: `Rol del usuario: ${currentUser.role}`
          });

          // Navegar a la ruta correspondiente según el rol del usuario
          this.router.navigate(['/home']);
        }
        
      } else {
        // Mostrar alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos'
        });
      }
    });
  }
}
