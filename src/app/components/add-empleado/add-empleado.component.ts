import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { Pais } from 'src/app/models/pais.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css'],
})
export class AddEmpleadoComponent {
  paises?: Pais[];
  empleado: Empleado = {
    nombres: '',
    estado: -1,
    idPais: -1,
  };

  selectedDate?: Date;

  constructor(
    private deporteService: PaisService,
    private modalidadService: EmpleadoService
  ) {}

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises() {
    this.deporteService.getPaises().subscribe((data) => {
      this.paises = data;
    });
  }

  onDateSelected() {
    if (this.selectedDate) {
      this.empleado.fechaNacimiento = this.selectedDate.getTime();
    }
  }

  onSubmit() {
    console.log(this.empleado);
    this.modalidadService
      .createEmpleado(this.empleado)
      .subscribe((data: any) => {
        Swal.fire({
          icon: 'info',
          title: 'Resultado de Registro - Rodolfo',
          text: data.mensaje,
        });
      });
  }
}
