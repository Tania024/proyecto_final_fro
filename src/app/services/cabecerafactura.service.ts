import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabeceraFactura } from '../domain/CabeceraFactura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabecerafacturaService {
  private apiUrl = 'http://localhost:8080/proyecto_final/rs/cabeceraFacturas'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  crearCabeceraFactura(cabeceraFactura: CabeceraFactura): Observable<CabeceraFactura> {
    return this.http.post<CabeceraFactura>(this.apiUrl, cabeceraFactura);
  }

  actualizarCabeceraFactura(cabeceraFactura: CabeceraFactura): Observable<CabeceraFactura> {
    return this.http.put<CabeceraFactura>(this.apiUrl, cabeceraFactura);
  }

  eliminarCabeceraFactura(cabCodigo: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/elim/${cabCodigo}`);
  }

  obtenerCabeceraFactura(cabCodigo: number): Observable<CabeceraFactura> {
    return this.http.get<CabeceraFactura>(`${this.apiUrl}/${cabCodigo}`);
  }

  obtenerTodasCabecerasFacturas(): Observable<CabeceraFactura[]> {
    return this.http.get<CabeceraFactura[]>(`${this.apiUrl}/list`);
  }
}
