import { Component, OnInit } from '@angular/core';
import { EquipoFutbolService } from 'src/app/servicios/equipo-futbol/equipo-futbol.service';
import { equipoFutbol } from 'src/app/interfaces/equipo-futbol';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-crear-equipo',
  templateUrl: './ruta-crear-equipo.component.html',
  styleUrls: ['./ruta-crear-equipo.component.css']
})
export class RutaCrearEquipoComponent implements OnInit {

  constructor(private readonly _equipoService:EquipoFutbolService, private readonly _url:Router) { }

  ngOnInit() {

  }

  ingresarEquipo(){
    var nombre = ((<HTMLInputElement>document.getElementById("nombre")).value);
    var liga = ((<HTMLInputElement>document.getElementById("liga")).value);
    var fecha = ((<HTMLInputElement>document.getElementById("fecha")).value);
    var copas = ((<HTMLInputElement>document.getElementById("copas")).value);
    var campeon:boolean = Boolean(((<HTMLInputElement>document.getElementById("campeonActual")).value));
    var fechaSplit = fecha.split('/');
    this._equipoService.agregarEquipo(new equipo(nombre, liga, new Date(Number(fechaSplit[0]),Number(fechaSplit[1]),Number(fechaSplit[2])), Number(copas), campeon));
    const url = ['gestionar-grupos'];
    this._url.navigate(url);

  }

}

class equipo implements equipoFutbol{
  constructor(nombre:string, liga:string, fechaCreacion:Date,copas:number,campeon:boolean){
    this.nombre = nombre;
    this.liga = liga;
    this.fechaCreacion = fechaCreacion;
    this.numeroCopasInternacionales = copas;
    this.campeonActual = campeon;
  }
  nombre:string
  liga:string
  fechaCreacion:Date
  numeroCopasInternacionales:number
  campeonActual: boolean 
}