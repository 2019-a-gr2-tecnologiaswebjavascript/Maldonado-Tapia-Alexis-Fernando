import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  nombreCajero:string = '';

  setNombreCajero(nombreCajero:string){
    this.nombreCajero = nombreCajero;
  }
}
