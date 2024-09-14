import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.css'
})
export class UsuarioListaComponent {
  servicio = inject(UsuariosService);
  usuarios: any[] = [];

  ngOnInit() {
    this.servicio.getUsuario().subscribe(u => {
      this.usuarios = u;
    });
  }
  eliminar(id: any): void {
    this.servicio.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuarios => usuarios.id !== id);
    });
  }
}
