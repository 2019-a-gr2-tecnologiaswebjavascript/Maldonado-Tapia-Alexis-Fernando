import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEquipoService } from '../dto/servicios/http-equipo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(private readonly _router:Router,
              private readonly _httpEquipo: HttpEquipoService,
              private readonly _httpClient: HttpClient) {

              }
    listaEquipos;
    listaEquiposVisibles;
    busqueda: string = "";
    ngOnInit(){
      this.buscarEquipos();
    }
    buscarEquipos(){
      const listaUsuarios$ = this._httpClient.get('http://localhost:1337/equipoFutbol');
  
      listaUsuarios$
            .subscribe(
              (datos)=>{

                this.listaEquipos = datos;
                this.listaEquiposVisibles = this.listaEquipos;
                console.log(this.listaEquipos);
              },
              (error)=>{
                console.log(error);
              }
            )
  
    }
  
  administrarGrupos(){
    const url = ['buscarEquipos'];
    this._router.navigate(url);

  }

  onChange($event){

    const listaUsuarios$ = this._httpClient.get('http://localhost:1337/equipoFutbol?where={"nombre":{"contains":"'+$event.target.value+'"}}');
  
      listaUsuarios$
            .subscribe(
              (datos)=>{

                this.listaEquipos = datos;
                this.listaEquiposVisibles = this.listaEquipos;
                console.log(this.listaEquipos);
              },
              (error)=>{
                console.log(error);
              }
            )
  
  }



}
