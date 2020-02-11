import { Injectable } from '@angular/core';
import { HttpSailsPrincipal } from './http-sails-principal.service';
import { Equipo } from '../interfaces/Equipo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class HttpEquipoService extends HttpSailsPrincipal<Equipo>{
  constructor(private readonly _httpClient:HttpClient) {
    super(_httpClient, "http://localhost:1337", '/equipoFutbol')
   }
}
