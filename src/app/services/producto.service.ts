import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../domain/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:8080/proyecto_final/rs/productos';

  constructor(private httpClient: HttpClient) {}

  guardarProducto(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(`${this.baseUrl}`, producto);
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(`${this.baseUrl}`, producto);
  }

  getProductoPorCodigo(pro_codigo: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.baseUrl}/${pro_codigo}`);
  }

  borrarProducto(pro_codigo: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/elim/${pro_codigo}`);
  }

  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/list`);
  }
}
