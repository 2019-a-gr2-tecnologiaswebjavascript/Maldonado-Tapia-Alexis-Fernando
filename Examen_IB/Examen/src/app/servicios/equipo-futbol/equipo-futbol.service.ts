import { Injectable } from '@angular/core';
import { equipoFutbol } from 'src/app/interfaces/equipo-futbol';

@Injectable({
  providedIn: 'root'
})
export class EquipoFutbolService {
  equipos:equipoFutbol[] = [];

  equiposFutbolMostrar:equipoFutbol[] = [];
  
  agregarEquipo(itemEquipo:equipoFutbol){
    this.equipos.splice(0,0,itemEquipo);
    this.equiposFutbolMostrar = this.equipos;
  }

  eliminarEquipo(nombreEquipo:string){
    this.equipos = this.equipos.filter(equipo => equipo.nombre != nombreEquipo);
    this.equiposFutbolMostrar = this.equipos;
  }

  buscarEquipo(nombreEquipo:string){
    if(nombreEquipo==''){
      this.equiposFutbolMostrar = this.equipos;  
    }else{
      this.equiposFutbolMostrar = this.equipos.filter(equipo => equipo.nombre == nombreEquipo);
    }
  }
 
}
