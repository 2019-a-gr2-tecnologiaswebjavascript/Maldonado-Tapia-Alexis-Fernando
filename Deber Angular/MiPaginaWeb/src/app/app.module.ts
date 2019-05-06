import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenComicComponent } from './imagen-comic/imagen-comic.component';
import { GrupoComicComponent } from './grupo-comic/grupo-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComicComponent,
    GrupoComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
