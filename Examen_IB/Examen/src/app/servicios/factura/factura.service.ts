import { Injectable } from '@angular/core';
import { factura } from 'src/app/interfaces/factura';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  listaFacturas:factura[] = []
  listaFacturasMostrar:factura[] = [];
  valorFactura:number = 0;
  nombreCajero:string = this._login.nombreCajero;
  constructor(private readonly _login:LoginServiceService) { }

  guardarFactura(formulario){
    var nombre:string = formulario.controls.nombre.value;
    var cedula:string = formulario.controls.cedula.value;
    var direccion:string = formulario.controls.direccion.value;
    var telefono:string = formulario.controls.telefono.value;
    var correo:string = formulario.controls.correo.value;
    this.nombreCajero = this._login.nombreCajero;
    this.listaFacturas.splice(0,0,new nuevaFactura(nombre, cedula, telefono, direccion, correo, this.valorFactura, this.nombreCajero))
    this.valorFactura = 0;
    console.log(this.listaFacturas);
  }

  cambiarTotalFactura(valor:number){
    this.valorFactura += valor;
    console.log(this.valorFactura);
  }

  buscarFactura(filtro:string){
    this.listaFacturasMostrar = this.listaFacturas.filter(factura => factura.nombre === filtro);
    if(this.listaFacturasMostrar.length < 1){
      this.listaFacturasMostrar = this.listaFacturas.filter(factura => factura.cajero === filtro);  
    }
  }
}

class nuevaFactura implements factura{
  constructor(nombre:string, cedula:string, telefono:string, direccion:string, correo:string, total:number, cajero:string){
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = telefono;
    this.direccion = direccion;
    this.correo = correo;
    this.total = total;
    this.cajero = cajero
  }
  nombre:string
  cedula:string
  telefono:string
  direccion:string
  correo:string
  total:number
  cajero:string
}