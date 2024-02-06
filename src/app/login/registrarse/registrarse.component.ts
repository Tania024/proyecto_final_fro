import { Component } from '@angular/core';
import { Cliente } from 'src/app/domain/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  cliente: Cliente = new Cliente(); // Crear una instancia de Cliente para almacenar los datos del formulario

  constructor(private clienteService: ClienteService) {}

  onSubmit(): void {
    // Lógica para manejar la subida del formulario
    this.clienteService.guardarCliente(this.cliente)
      .subscribe(
        response => {
          // Manejar la respuesta exitosa
          console.log('Cliente registrado exitosamente', response);
        },
        error => {
          // Manejar el error en caso de fallo
          console.error('Error al registrar cliente', error);
        }
      );
  }
}
