import { Component } from '@angular/core';
import { UsuarioCrearComponent } from "../usuario-crear/usuario-crear.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsuarioCrearComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
