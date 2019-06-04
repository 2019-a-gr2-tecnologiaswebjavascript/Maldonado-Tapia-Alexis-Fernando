import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/servicios/jugador.service';
import { jugador } from 'src/app/interfaces/jugador';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-administrar-jugadores',
  templateUrl: './ruta-administrar-jugadores.component.html',
  styleUrls: ['./ruta-administrar-jugadores.component.css']
})
export class RutaAdministrarJugadoresComponent implements OnInit {

  constructor(private readonly _jugadorService:JugadorService, private readonly _route:ActivatedRoute, private readonly _url:Router) { }
  listaJugadores:jugador[] = [];
  equipoNombre = '';

  ngOnInit() {
    //this.listaJugadores = this._jugadorService.listaJugadoresMostrar;
    const parametrosConsulta$ = this._route.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        this.equipoNombre = parametrosConsulta.equipoNombre;
      }
    );
    console.log('buscarJugadorXEquipo');
    this._jugadorService.buscarJugadorXEquipo(this.equipoNombre);
    this.listaJugadores = this._jugadorService.listaJugadoresMostrar;
  }

  crearJugador(){
    const parametros = {
      queryParams: {
        equipoNombre: this.equipoNombre
      }

    }
    const url = ['gestionar-grupos','crear-jugador'];
    this._url.navigate(url, parametros);
  }

  buscarJugador(){
    console.log('buscar jugador');
    var nombre = ((<HTMLInputElement>document.getElementById("buscarJugador")).value);
    this._jugadorService.buscarJugador(nombre);
    this.listaJugadores = this._jugadorService.listaJugadoresMostrar;
  }

  eliminarJugador(idJugador:number){
    console.log('eliminar Jugador')
    this._jugadorService.eliminarJugador(idJugador);
  }

}
