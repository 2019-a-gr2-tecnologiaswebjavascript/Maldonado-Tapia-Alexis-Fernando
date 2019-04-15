import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [ // se guardan los componentes
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [ // se guardan otrod modulos
    BrowserModule // Directiva
  ],
  providers: [ // Servicios
    CarritoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
