import { Component, inject, OnInit } from '@angular/core';
import { MecanicoService } from '../../services/mecanico.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mecanico-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './mecanico-editar.component.html',
  styleUrl: './mecanico-editar.component.css'
})
export class MecanicoEditarComponent implements OnInit {
  servicio = inject(MecanicoService);
  revision: any[] = [];
  placaSeleccionada: string = '';
  descripcionSeleccionada: string = '';

  ngOnInit() {
    this.servicio.getRevision().subscribe(r => {
      this.revision = r;
    });
  }

  // Método para filtrar las revisiones
  get revisionesFiltradas() {
    return this.revision.filter(rev => {
      const cumplePlaca = this.placaSeleccionada ? rev.placa.includes(this.placaSeleccionada) : true;
      const cumpleDescripcion = this.descripcionSeleccionada ? rev.descripcion.includes(this.descripcionSeleccionada) : true;
      return cumplePlaca && cumpleDescripcion;
    });
  }
}
