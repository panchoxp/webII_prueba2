import { Component, inject } from '@angular/core';
import { MecanicoService } from '../../services/mecanico.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mecanico-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mecanico-crear.component.html',
  styleUrl: './mecanico-crear.component.css'
})
export class MecanicoCrearComponent {
  id: string | undefined;
  placa: string | undefined;
  descripcion: string | undefined;

  private revisionService = inject(MecanicoService);

  guardarRevision(formulario: any) {
    if (formulario.valid) {
      const nuevaRevision = {
        id: this.id,
        placa: this.placa,
        descripcion: this.descripcion
      };

      this.revisionService.postLRevision(nuevaRevision).subscribe({
        next: (response) => {
          console.log('revision guardado', response);
          alert('revision guardada exitosamente');
          window.location.href = "mecanico"; // redirigir después de guardar
        },
        error: (err) => {
          console.error('Error al guardar revision', err);
          alert('Hubo un error al guardar el revision');
        }
      });
    }
  }
}
