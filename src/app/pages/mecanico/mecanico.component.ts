import { Component } from '@angular/core';
import { MecanicoCrearComponent } from "../mecanico-crear/mecanico-crear.component";
import { MecanicoEditarComponent } from "../mecanico-lista/mecanico-editar.component";

@Component({
  selector: 'app-mecanico',
  standalone: true,
  imports: [MecanicoCrearComponent, MecanicoEditarComponent],
  templateUrl: './mecanico.component.html',
  styleUrl: './mecanico.component.css'
})
export class MecanicoComponent {

}
