import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {
  id: string | undefined;
  role: string | undefined;
  email: string | undefined;
  password: string | undefined;
  ruta = inject(ActivatedRoute);
  servicio = inject(UsuariosService);

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      const id = params['idUsuario'];
      console.log('ID del usuario:', id);

      this.servicio.getUsuarioID(id).subscribe(usuario => {
        this.id = usuario.id;
        this.role = usuario.role;
        this.email = usuario.email;
        this.password = usuario.password;
      });
    });
  }

  editar(formulario: NgForm) {
    const usuarioActualizado = {
      id: this.id,
      role: this.role,
      email: this.email,
      // Solo enviar la nueva contraseña si fue ingresada, de lo contrario usar la contraseña actual
      password: this.password || formulario.value.password 
    };
  
    this.servicio.putUsuario(usuarioActualizado).subscribe(() => {
      alert('Usuario editado correctamente');
      window.location.href = 'admin';
    }, error => {
      console.error('Error al editar el usuario', error);
      alert('Hubo un error al editar el usuario');
    });
  }
  
  
}


