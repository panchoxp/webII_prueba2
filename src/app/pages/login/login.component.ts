import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  authService = inject(AuthServiceService);
  router = inject(Router);

  // Método de login
  login(form: NgForm) {
    this.authService.login(form.value).subscribe(response => {
      if (response.accessToken) {
        sessionStorage.setItem("login", "true");

        // Obtener el rol del usuario desde la API
        this.authService.getUserRole(form.value.email).subscribe(user => {
          const role = user[0]?.role; // Obtener el rol del primer usuario encontrado
          if (role) {
            sessionStorage.setItem("role", role); // Almacena el rol en sessionStorage          
            window.location.reload();       
          }
        });
        this.router.navigate(['/home']);// Redirige a la página principal  
      }
    });
  }
  registrar(){
    window.location.href = "crearUsuario";
  }
}
