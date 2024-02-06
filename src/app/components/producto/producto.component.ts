import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/Producto';
import { ProductoService } from 'src/app/services/producto.service';
import { DetallefacturaService } from 'src/app/services/detallefactura.service';
import { DetalleFactura } from 'src/app/domain/DetalleFactura';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private detalleFacturaService: DetallefacturaService
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

  
}
