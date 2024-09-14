import { Component, inject } from '@angular/core';
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
export class MecanicoEditarComponent {
  servicio = inject(MecanicoService);
  revision: any[] = [];

  ngOnInit() {
    this.servicio.getRevision().subscribe(r => {
      this.revision = r;
    });
  }

}
