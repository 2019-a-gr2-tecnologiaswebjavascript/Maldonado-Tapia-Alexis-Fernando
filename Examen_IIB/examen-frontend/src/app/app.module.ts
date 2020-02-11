import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaBuscarEquiposComponent } from './rutas/ruta-buscar-equipos/ruta-buscar-equipos.component';
import { RutaBuscarJugadoresComponent } from './rutas/ruta-buscar-jugadores/ruta-buscar-jugadores.component';

import { RutaCrearJugadoresComponent } from './rutas/ruta-crear-jugadores/ruta-crear-jugadores.component';
import { FormsModule } from '@angular/forms';
import { HttpEquipoService } from './dto/servicios/http-equipo.service';
import { HttpClientModule } from '@angular/common/http';
import { RowTableJugadorComponent } from './row-table-jugador/row-table-jugador.component';
import { RutaDetalleFacturaComponent } from './rutas/ruta-detalle-factura/ruta-detalle-factura.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';


@NgModule({
  declarations: [AppComponent, 
                RutaBuscarEquiposComponent, 
                RutaBuscarJugadoresComponent, 
                RutaCrearJugadoresComponent, 
                RowTableJugadorComponent, 
                RutaDetalleFacturaComponent,
                RutaLoginComponent
              ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpEquipoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
