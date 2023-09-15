import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deporte } from '../models/deporte.model';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';

const baseUrl = `${AppSettings.API_ENDPOINT}/util`;

@Injectable({
  providedIn: 'root',
})
export class DeporteService {
  constructor(private httpClient: HttpClient) {}

  getDeportes(): Observable<Deporte[]> {
    return this.httpClient.get<Deporte[]>(`${baseUrl}/deporte`);
  }
}
