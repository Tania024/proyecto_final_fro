import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetalleFactura } from '../domain/DetalleFactura';

@Injectable({
  providedIn: 'root'
})
export class DetallefacturaService {
  private apiUrl = 'http://localhost:8080/proyecto_final/rs/detalleFacturas'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  crearDetalleFactura(detalleFactura: DetalleFactura): Observable<DetalleFactura> {
    return this.http.post<DetalleFactura>(this.apiUrl, detalleFactura);
  }

  actualizarDetalleFactura(detalleFactura: DetalleFactura): Observable<DetalleFactura> {
    return this.http.put<DetalleFactura>(this.apiUrl, detalleFactura);
  }

  eliminarDetalleFactura(detCodigo: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/elim/${detCodigo}`);
  }

  obtenerDetalleFactura(detCodigo: number): Observable<DetalleFactura> {
    return this.http.get<DetalleFactura>(`${this.apiUrl}/${detCodigo}`);
  }

  obtenerTodosDetallesFactura(): Observable<DetalleFactura[]> {
    return this.http.get<DetalleFactura[]>(`${this.apiUrl}/list`);
  }

}
