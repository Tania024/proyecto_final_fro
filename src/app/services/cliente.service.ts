import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/proyecto_final/rs/clientes';
  private clienteActual: Cliente | null = null;

  constructor(private httpClient: HttpClient) {}

  guardarCliente(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, cliente);
  }

  actualizarCliente(cliente: Cliente): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}`, cliente);
  }

  getClientePorUsuario(cli_usuario: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseUrl}/${cli_usuario}`);
  }

  borrarCliente(cli_codigo: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/elim/${cli_codigo}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}/list`);
  }

  setClienteActual(cliente: Cliente): void {
    this.clienteActual = cliente;
  }

  getClienteActual(): Cliente | null {
    return this.clienteActual;
  }
}
