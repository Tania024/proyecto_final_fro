import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { IniciarSesionComponent } from './login/iniciar-sesion/iniciar-sesion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductoComponent,
    CarritoComponent,
    InicioComponent,
    RegistrarseComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
