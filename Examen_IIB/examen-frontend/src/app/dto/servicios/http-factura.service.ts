import { Injectable } from '@angular/core';
import { HttpSailsPrincipal } from './http-sails-principal.service';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../interfaces/Factura';


@Injectable({
  providedIn: 'root'
})
export class HttpFacturaService extends HttpSailsPrincipal<Factura>{

  constructor(private readonly _httpClient:HttpClient) { 
    super(_httpClient, "http://localhost:1337", '/factura')
  }
}
