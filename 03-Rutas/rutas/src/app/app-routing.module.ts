import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaVideojuegosFpsComponent } from './rutas/ruta-videojuegos-fps/ruta-videojuegos-fps.component';
import { RutaVideojuegosDeportesComponent } from './rutas/ruta-videojuegos-deportes/ruta-videojuegos-deportes.component';

const routes: Routes = [
  {
    path:'home/app',
    component: RutaHomeComponent
  },
  {
    path:'creditos/:idCredito/:tasaReferencia',
    component: RutaCreditosComponent
  },
  {
    path:'productos',
    component: RutaProductosComponent,
    children:[
      {
        path: 'hogar',
        component: RutaProductosHogarComponent
      },
      {
        path: 'videojuegos',
        component: RutaProductosVideojuegosComponent,
        children:[
          {
            path: 'fps',
            component: RutaVideojuegosFpsComponent
          },
          {
            path: 'deportes',
            component: RutaVideojuegosDeportesComponent
          }
        ]
      }
    ]
  },
  {
    path:'no-encontrada',
    component: RutaNoEncontradaComponent
  },
  {
    path: '',
    redirectTo: '/home/app',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
