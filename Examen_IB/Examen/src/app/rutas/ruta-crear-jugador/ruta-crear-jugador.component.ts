import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/servicios/jugador.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { jugador } from 'src/app/interfaces/jugador';

@Component({
  selector: 'app-ruta-crear-jugador',
  templateUrl: './ruta-crear-jugador.component.html',
  styleUrls: ['./ruta-crear-jugador.component.css']
})
export class RutaCrearJugadorComponent implements OnInit {


  constructor(private readonly _jugadorService:JugadorService, private readonly _route:ActivatedRoute, private readonly _url:Router) { }
  equipoFutbol = '';

  ngOnInit() {
    const parametrosConsulta$ = this._route.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        this.equipoFutbol = parametrosConsulta.equipoNombre;
      }
    );

    
  }



  ingresarJugador(){
    var numeroCamiseta = ((<HTMLInputElement>document.getElementById("numeroCamiseta")).value);
    var nombreCamiseta = ((<HTMLInputElement>document.getElementById("nombreCamiseta")).value);
    var nombreCompleto = ((<HTMLInputElement>document.getElementById("nombreCompleto")).value);
    var fecha = ((<HTMLInputElement>document.getElementById("fecha")).value);
    var goles = ((<HTMLInputElement>document.getElementById("goles")).value);
    var valor = ((<HTMLInputElement>document.getElementById("valor")).value);
    var fechaSplit = fecha.split('/');
    this._jugadorService.agregarJugador(new jugadorF(this._jugadorService.listaJugadores.length+1,Number(numeroCamiseta), nombreCamiseta, nombreCompleto, new Date(Number(fechaSplit[0]),Number(fechaSplit[1]),Number(fechaSplit[2])), Number(goles), Number(valor),this.equipoFutbol));
    const parametros = {
      queryParams: {
        equipoNombre: this.equipoFutbol
      }
    }
    console.log(this._jugadorService.listaJugadores);
    console.log(this._jugadorService.listaJugadoresMostrar);
    const url = ['gestionar-grupos','gestionar-jugador'];
    this._url.navigate(url, parametros);
  }

}

class jugadorF implements jugador{
  constructor(idJugador,numeroCamiseta:number, nombreCamiseta:string, nombreCompletoJugador:string, fechaIngresoEquipo:Date, goles:number, valor:number, equipoFutbol:string){
    this.idJugador = idJugador;
    this.numeroCamiseta = numeroCamiseta;
    this.nombreCamiseta = nombreCamiseta;
    this.nombreCompletoJugador = nombreCompletoJugador;
    this.fechaIngresoEquipo = fechaIngresoEquipo;
    this.goles = goles;
    this.equipoFutbol = equipoFutbol;
    this.valor = valor;
  }
  idJugador:number
  numeroCamiseta: number;
  nombreCamiseta: string; 
  nombreCompletoJugador:string;
  fechaIngresoEquipo: Date;
  goles:number;
  valor:number;
  equipoFutbol:string;
}
