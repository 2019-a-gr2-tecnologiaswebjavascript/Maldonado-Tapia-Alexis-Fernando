import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoFutbolService } from 'src/app/servicios/equipo-futbol/equipo-futbol.service';
import { equipoFutbol } from 'src/app/interfaces/equipo-futbol';

@Component({
  selector: 'app-ruta-administrar-grupos',
  templateUrl: './ruta-administrar-grupos.component.html',
  styleUrls: ['./ruta-administrar-grupos.component.css']
})
export class RutaAdministrarGruposComponent implements OnInit {

  constructor(private readonly _router:Router, private readonly _equipoService:EquipoFutbolService) { }

  listaEquipos:equipoFutbol[] = [];

  crearEquipo(){
    const url = ['gestionar-grupos','crear-equipo'];
    this._router.navigate(url);
    
  }

  buscarEquipo(){
    var nombreEquipo = ((<HTMLInputElement>document.getElementById("buscar")).value);
    this._equipoService.buscarEquipo(nombreEquipo)
    this.listaEquipos = this._equipoService.equiposFutbolMostrar
  }

  eliminarEquipo(equipoNombre:string){
    this._equipoService.eliminarEquipo(equipoNombre)
    this.listaEquipos = this._equipoService.equipos
  }

  ngOnInit() {
    this.listaEquipos = this._equipoService.equiposFutbolMostrar;
  }

  verJugadores(nombreEquipo:string){
    const parametros = {
      queryParams: {
        equipoNombre: nombreEquipo
      }

    }
    const url = ['gestionar-grupos','gestionar-jugador'];
    this._router.navigate(url, parametros);
  }

  volver(){
    const url = ['principal'];
    this._router.navigate(url);
  }



}
