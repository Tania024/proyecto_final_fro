import { Component, OnInit } from '@angular/core';
import { DetalleFactura } from 'src/app/domain/DetalleFactura';
import { ClienteService } from 'src/app/services/cliente.service';
import { DetallefacturaService } from 'src/app/services/detallefactura.service';
import { CabecerafacturaService } from 'src/app/services/cabecerafactura.service'; 

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  detallesFactura: DetalleFactura[] = [];
  cabecerasFactura: any[] = [];

  constructor(
    private detalleFacturaService: DetallefacturaService,
    private clienteService: ClienteService,
    private cabeceraFacturaService: CabecerafacturaService
  ) {}

  ngOnInit(): void {
    this.cargarDetallesFactura();
  }

  eliminarDetalle(detalleId: number | undefined): void {
    if (detalleId !== undefined) {
      this.detalleFacturaService.eliminarDetalleFactura(detalleId).subscribe(
        () => {
          console.log('Detalle eliminado correctamente.');
          this.actualizarDetalles();
        },
        (error) => {
          console.error('Error al eliminar el detalle de factura:', error);
        }
      );
    } else {
      console.warn('Se intentó eliminar un detalle con ID undefined. Verifica tu lógica.');
    }
  }

  private cargarDetallesFactura(): void {
    const cliente = this.clienteService.getClienteActual();

    if (cliente && cliente.cli_codigo !== undefined) {
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

  private actualizarDetalles(): void {
    this.cargarDetallesFactura();
  }

  pagar(): void {
    const cliente = this.clienteService.getClienteActual();
  
    if (cliente && cliente.cli_codigo !== undefined) {
      // Lógica para asignar la cabecera a los detalles automáticamente
      this.detallesFactura.forEach(detalle => {
        if (!detalle.cabeceraFactura) {
          detalle.cabeceraFactura = {
            cab_fecha: new Date(),
            cab_iva: 12,
            cab_subtotal: 0,
            cab_total: 0,
            cliente: cliente,
            detalles: [detalle]  // Detalle asignado a la nueva cabecera
          };
        }
      });
  
      // Crear la cabecera con detalles
      this.cabeceraFacturaService.crearCabeceraConDetalles({
        cab_fecha: new Date(),
        cab_iva: 12,
        cab_subtotal: 0,
        cab_total: 0,
        cliente: cliente,
        detalles: this.detallesFactura
      })
        .subscribe(
          (cabeceraCreada) => {
            console.log('Cabecera creada correctamente:', cabeceraCreada);
            this.actualizarDetalles();
          },
          (error) => {
            console.error('Error al crear la cabecera:', error);
          }
        );
    } else {
      console.error('Error: Cliente no autenticado o código de cliente no disponible');
    }
  }
}
