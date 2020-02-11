import { Injectable } from '@angular/core';
import { HttpSailsPrincipal } from './http-sails-principal.service';
import { Jugador } from '../interfaces/Jugador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpJugadorService extends HttpSailsPrincipal<Jugador>{

  constructor(private readonly _httpClient:HttpClient) { 
    super(_httpClient, "http://localhost:1337", '/jugador')
  }
}
