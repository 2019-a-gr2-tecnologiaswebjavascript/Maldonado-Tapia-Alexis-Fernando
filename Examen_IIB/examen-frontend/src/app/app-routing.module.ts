import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RutaBuscarEquiposComponent } from './rutas/ruta-buscar-equipos/ruta-buscar-equipos.component';
import { RutaBuscarJugadoresComponent } from './rutas/ruta-buscar-jugadores/ruta-buscar-jugadores.component';
import { RutaCrearJugadoresComponent } from './rutas/ruta-crear-jugadores/ruta-crear-jugadores.component';
import { RutaDetalleFacturaComponent } from './rutas/ruta-detalle-factura/ruta-detalle-factura.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { TabsPageModule } from './tabs/tabs.module';
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    //component: RutaLoginComponent
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  /*{
    path: 'menuPrincipal',
    component: Tab1Page
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },*/
  {
    path: 'buscarEquipos',
    component: RutaBuscarEquiposComponent
  },
  {
    path: 'buscarJugadores',
    component: RutaBuscarJugadoresComponent
  },
  {
    path: 'crearJugadores',
    component: RutaCrearJugadoresComponent
  },
  {
    path: 'buscarDetalle',
    component: RutaDetalleFacturaComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
