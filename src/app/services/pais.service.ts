import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../models/pais.model';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';

const baseUrl = `${AppSettings.API_ENDPOINT}/util`;

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private httpClient: HttpClient) {}

  getPaises(): Observable<Pais[]> {
    return this.httpClient.get<Pais[]>(`${baseUrl}/pais`);
  }
}
