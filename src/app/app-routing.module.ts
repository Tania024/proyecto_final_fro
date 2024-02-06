import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciarSesionComponent } from './login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';


const routes: Routes = [
  { path: '', redirectTo: '/iniciarSesion', pathMatch: 'full' },
  { path: 'components/detalle-factura', component: CarritoComponent },
  { path: 'components/producto', component: ProductoComponent },
  { path: 'components/inicio', component: InicioComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'iniciarSesion', component: IniciarSesionComponent },
  // Otras rutas...

  // Asegúrate de que las rutas más generales estén al final
  { path: '**', redirectTo: '/iniciarSesion' } // Página no encontrada, redirige a iniciarSesion

  // {path:"paginas/factura", component: FacturaComponent},
  // {path:"paginas/detalle-factura", component: DetalleFacturaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
