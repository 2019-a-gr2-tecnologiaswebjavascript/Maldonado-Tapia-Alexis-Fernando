import { Injectable } from '@angular/core';
import { HttpSailsPrincipal } from './http-sails-principal.service';
import { DetalleFactura } from '../interfaces/DetalleFactura';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDetalleFacturaService extends HttpSailsPrincipal<DetalleFactura>{

  constructor(private readonly _httpClient:HttpClient) { 
    super(_httpClient, "http://localhost:1337", '/detallefactura')
  }
}

