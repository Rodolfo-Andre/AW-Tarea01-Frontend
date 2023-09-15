import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado.model';
import { Observable } from 'rxjs';

const baseUrlEmpleado = `${AppSettings.API_ENDPOINT}/empleado`;

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  createEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post<Empleado>(baseUrlEmpleado, empleado);
  }
}
