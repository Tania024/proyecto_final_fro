import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Carrito', path: 'components/detalle-factura'},
    {titulo: 'Inicio', path: 'components/inicio'},
    {titulo: 'Productos', path: 'components/producto'},
    {titulo: 'Iniciar Sesion', path: 'components/IniciarSesion'},
    // {titulo: 'Factura', path: 'paginas/Inicio'},
    // {titulo: 'Detalle Factura', path: 'paginas/detalle-factura'},

  ]
  // carritoHabilitado: boolean = false;
  // productoHabilitado: boolean = false;

  // toggleCarrito(): void {
  //   this.carritoHabilitado = !this.carritoHabilitado;
  // }

  // toggleProducto(): void {
  //   this.productoHabilitado = !this.productoHabilitado;
  // }

}
