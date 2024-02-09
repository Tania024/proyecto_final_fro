import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/Producto';
import { ProductoService } from 'src/app/services/producto.service';
import { DetallefacturaService } from 'src/app/services/detallefactura.service';
import { DetalleFactura } from 'src/app/domain/DetalleFactura';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  cantidadInput: number = 1;

  constructor(
    private productoService: ProductoService,
    private detalleFacturaService: DetallefacturaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe(
      (productos) => {
        this.productos = productos;
      },
      (error) => {
        console.error('Error al cargar productos', error);
      }
    );
  }

  agregarAlCarrito(producto: Producto): void {
    const cliente = this.clienteService.getClienteActual();

    if (!cliente) {
      console.error('Error: Cliente no autenticado');
      return;
    }

    // Comprobación de nulidad para evitar errores si producto.pro_precio es undefined
    const precio = producto.pro_precio !== undefined ? producto.pro_precio : 0;

    const detalleFactura: DetalleFactura = {
      det_precio: precio,
      det_cantidad: this.cantidadInput,
      det_subtotal: precio * this.cantidadInput,
      producto: producto,
      cliente: cliente
    };

    // Lógica para agregar al carrito con el detalleFacturaService
    this.detalleFacturaService.crearDetalleFactura(detalleFactura).subscribe(
      (response) => {
        const detalleCreado: DetalleFactura = response;
        console.log('Detalle agregado al carrito:', detalleCreado);
      },
      (error) => {
        console.error('Error al agregar al carrito:', error);
      }
    );
  }
}
