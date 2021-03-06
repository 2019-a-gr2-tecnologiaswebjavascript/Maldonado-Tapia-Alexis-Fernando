import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RutaPrincipalComponent } from './rutas/ruta-principal/ruta-principal/ruta-principal.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { EstaLogueadoService } from './servicios/guard/esta-logueado.service';
import { RutaAdministrarGruposComponent } from './rutas/ruta-administrar-grupos/ruta-administrar-grupos/ruta-administrar-grupos.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar/ruta-comprar.component';
import { RutaRevisarComprasComponent } from './rutas/ruta-revisar-compras/ruta-revisar-compras/ruta-revisar-compras.component';
import { RutaCrearEquipoComponent } from './rutas/ruta-crear-equipo/ruta-crear-equipo.component';
import { RutaAdministrarJugadoresComponent } from './rutas/ruta-administrar-jugadores/ruta-administrar-jugadores.component';
import { RutaCrearJugadorComponent } from './rutas/ruta-crear-jugador/ruta-crear-jugador.component';
import { RutaComprasComponent } from './rutas/ruta-compras/ruta-compras.component';

const routes: Routes = [
  {
    path:'home',
    component: AppComponent,
  },
  {
    path:'principal',
    component:RutaPrincipalComponent,
    canActivate:[
      EstaLogueadoService
    ]
  },
  {
    path:'gestionar-grupos',
    component:RutaAdministrarGruposComponent,
    canActivate:[
      EstaLogueadoService
    ],
    children:[
      {
        path:'crear-equipo',
        component: RutaCrearEquipoComponent,
        canActivate:[
          EstaLogueadoService
        ]
      },
      {
        path: 'gestionar-jugador',
        component: RutaAdministrarJugadoresComponent,
        canActivate:[
          EstaLogueadoService
        ]
      },
      {
        path: 'crear-jugador',
        component: RutaCrearJugadorComponent,
        canActivate:[
          EstaLogueadoService
        ],
      }
    ]
  },
  {
    path:'comprar',
    component:RutaComprasComponent,
    canActivate:[
      EstaLogueadoService
    ],
  },
  {
    path:'revisar',
    component: RutaRevisarComprasComponent,
    canActivate:[
      EstaLogueadoService
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
