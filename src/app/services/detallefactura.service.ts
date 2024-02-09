import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetalleFactura } from '../domain/DetalleFactura';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class DetallefacturaService {
  private apiUrl = 'http://localhost:8080/proyecto_final/rs/detalleFacturas';

  constructor(private http: HttpClient, private clienteService: ClienteService) { }

  crearDetalleFactura(detalleFactura: DetalleFactura): Observable<DetalleFactura> {
    return this.http.post<DetalleFactura>(this.apiUrl, detalleFactura);
  }

  actualizarDetalleFactura(detalleFactura: DetalleFactura): Observable<DetalleFactura> {
    return this.http.put<DetalleFactura>(this.apiUrl, detalleFactura);
  }

  eliminarDetalleFactura(detCodigo: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/elim/${detCodigo}`, { observe: 'response' });
  }

  obtenerDetalleFactura(detCodigo: number): Observable<DetalleFactura> {
    return this.http.get<DetalleFactura>(`${this.apiUrl}/${detCodigo}`);
  }

  obtenerTodosDetallesFactura(): Observable<DetalleFactura[]> {
    return this.http.get<DetalleFactura[]>(`${this.apiUrl}/list`);
  }

  obtenerDetallesFacturaPorCliente(cliCodigo: number): Observable<DetalleFactura[]> {
    return this.http.get<DetalleFactura[]>(`${this.apiUrl}/cliente/${cliCodigo}`);
  }
}
