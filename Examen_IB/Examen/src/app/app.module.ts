import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaPrincipalComponent } from './rutas/ruta-principal/ruta-principal/ruta-principal.component';
import { RutaRevisarComprasComponent } from './rutas/ruta-revisar-compras/ruta-revisar-compras/ruta-revisar-compras.component';
import { RutaAdministrarGruposComponent } from './rutas/ruta-administrar-grupos/ruta-administrar-grupos/ruta-administrar-grupos.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar/ruta-comprar.component';
import { RutaCrearEquipoComponent } from './rutas/ruta-crear-equipo/ruta-crear-equipo.component';
import { RutaAdministrarJugadoresComponent } from './rutas/ruta-administrar-jugadores/ruta-administrar-jugadores.component';
import { RutaCrearJugadorComponent } from './rutas/ruta-crear-jugador/ruta-crear-jugador.component';
import { RutaComprasComponent } from './rutas/ruta-compras/ruta-compras.component';
import {FormsModule} from '@angular/forms';
import { DetalleFacturaComponent } from './rutas/detalle-factura/detalle-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaPrincipalComponent,
    RutaRevisarComprasComponent,
    RutaAdministrarGruposComponent,
    RutaComprarComponent,
    RutaCrearEquipoComponent,
    RutaAdministrarJugadoresComponent,
    RutaCrearJugadorComponent,
    RutaComprasComponent,
    DetalleFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
