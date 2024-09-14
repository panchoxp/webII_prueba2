import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-crear.component.html',
  styleUrl: './usuario-crear.component.css'
})
export class UsuarioCrearComponent {
  id: string | undefined;
  email: string | undefined;
  password: string | undefined;
  role: string ="Mecanico";

  private UsuarioService = inject(UsuariosService);

  guardarUsuario(formulario: any) {
    if (formulario.valid) {
      const nuevoUsuario = {
        id: this.id,
        email: this.email,
        password: this.password,
        role: this.role
      };

      this.UsuarioService.postUsuario(nuevoUsuario).subscribe({
        next: (response) => {
          console.log('Usuario guardado', response);
          alert('Usuario guardada exitosamente');
          window.location.href = "home"; // redirigir después de guardar
        },
        error: (err) => {
          console.error('Error al guardar Usuario', err);
          alert('Hubo un error al guardar el Usuario');
        }
      });
    }
  }
}
