import { Injectable } from '@angular/core';
import { jugador } from '../interfaces/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  constructor() { }
  idJugador = 1;
  listaJugadores:jugador[] = [];
  listaJugadoresMostrar:jugador[] = [];

  buscarJugadorXEquipo(equipoNombre:string){
    console.log('buscando x Equipo')
    this.listaJugadoresMostrar = this.listaJugadores.filter(jugador => jugador.equipoFutbol == equipoNombre);
  }

  agregarJugador(itemJugador:jugador){
    itemJugador.idJugador = this.idJugador;
    this.idJugador ++;
    this.listaJugadores.splice(0,0,itemJugador);
    this.listaJugadoresMostrar = this.listaJugadores;
  }

  eliminarJugador(idJugador:number){
    console.log('aqui eliminando jugador')
    this.listaJugadores = this.listaJugadores.filter(jugador => jugador.idJugador != idJugador);
    this.listaJugadoresMostrar = this.listaJugadores;
  }

  buscarJugador(nombreJugador:string){
    console.log('aqui nombre: '+nombreJugador);
    if(nombreJugador==''){
      this.listaJugadoresMostrar = this.listaJugadores;  
    }else{
      this.listaJugadoresMostrar = this.listaJugadores.filter(jugador => jugador.nombreCamiseta == nombreJugador);
    }
  }
}
