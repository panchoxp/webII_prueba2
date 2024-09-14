import { Component } from '@angular/core';
import { UsuarioListaComponent } from "../usuario-lista/usuario-lista.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UsuarioListaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
