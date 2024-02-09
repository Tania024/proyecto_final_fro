import { Component, OnInit } from '@angular/core';
import { DetalleFactura } from 'src/app/domain/DetalleFactura';
import { ClienteService } from 'src/app/services/cliente.service';
import { DetallefacturaService } from 'src/app/services/detallefactura.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  detallesFactura: DetalleFactura[] = [];

  constructor(
    private detalleFacturaService: DetallefacturaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    // Obtener el cliente actual
    const cliente = this.clienteService.getClienteActual();

    if (cliente && cliente.cli_codigo !== undefined) {
      // Cargar los detalles de la factura asociados al cliente logueado
      this.detalleFacturaService.obtenerDetallesFacturaPorCliente(cliente.cli_codigo)
        .subscribe(
          (detallesFactura) => {
            this.detallesFactura = detallesFactura;
          },
          (error) => {
            console.error('Error al cargar detalles de factura', error);
          }
        );
    } else {
      console.error('Error: Cliente no autenticado o código de cliente no disponible');
    }
  }

  // carrito.component.ts

  eliminarDetalle(detalleId: number | undefined): void {
    if (detalleId !== undefined) {
        this.detalleFacturaService.eliminarDetalleFactura(detalleId).subscribe(
            (response: any) => {
                // Verificar el cuerpo de la respuesta y manejar según sea necesario
                if (response && response.status === 'OK') {
                    console.log('Detalle eliminado correctamente.');
                    this.actualizarDetalles();
                } else {
                    console.error('Error al eliminar el detalle de factura. Respuesta del servidor:', response);
                }
            },
            (error) => {
                console.error('Error al eliminar el detalle de factura:', error);
            }
        );
    } else {
        console.warn('Se intentó eliminar un detalle con ID undefined. Verifica tu lógica.');
    }
}

  private actualizarDetalles(): void {
    // Obtener el cliente actual
    const cliente = this.clienteService.getClienteActual();

    if (cliente && cliente.cli_codigo !== undefined) {
      // Llamar al servicio para obtener los detalles de factura actualizados
      this.detalleFacturaService.obtenerDetallesFacturaPorCliente(cliente.cli_codigo)
        .subscribe(
          (detallesFactura) => {
            this.detallesFactura = detallesFactura;
            console.log('Detalles actualizados:', detallesFactura);
          },
          (error) => {
            console.error('Error al obtener detalles de factura actualizados', error);
          }
        );
    } else {
      console.error('Error: Cliente no autenticado o código de cliente no disponible');
    }
  }
}
