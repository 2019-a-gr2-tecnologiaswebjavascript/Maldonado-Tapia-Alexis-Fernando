import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { JugadorService } from 'src/app/servicios/jugador.service';
import { FacturaService } from 'src/app/servicios/factura/factura.service';
import { jugador } from 'src/app/interfaces/jugador';
import { detalleFactura } from 'src/app/interfaces/detalle-factura';
import { DetalleFacturaService } from 'src/app/servicios/detalle-factura/detalle-factura.service';

@Component({
  selector: 'app-ruta-compras',
  templateUrl: './ruta-compras.component.html',
  styleUrls: ['./ruta-compras.component.css']
})
export class RutaComprasComponent implements OnInit {

  constructor(private readonly _login:LoginServiceService, private readonly _jugador:JugadorService, private readonly _factura:FacturaService, private readonly _detalleFactura:DetalleFacturaService) { }

  nombreCajero = '';
  valorFactura:number = 0;
  listaJugadores:jugador[] = [];
  listaDetalles:detalleFactura[] = [];


  guardarFactura(formulario){
    this._factura.guardarFactura(formulario);
    this._detalleFactura.disminuirDetalle;
    this.listaDetalles = []
    this.valorFactura = 0
  }

  aumentarPrecioFactura(item:jugador){

    this._detalleFactura.agregarDetalle(new detalle(item.nombreCamiseta, item.valor));
    this._factura.cambiarTotalFactura(item.valor);
    this.listaDetalles = this._detalleFactura.listaDetalle;
    this.valorFactura = this._factura.valorFactura
  
  }

  disminuirPrecioFactura(item:detalleFactura){
    console.log(item);
    this._detalleFactura.disminuirDetalle(item);
    this._factura.cambiarTotalFactura(item.precio*-1);
    this.listaDetalles = this._detalleFactura.listaDetalle;
    this.valorFactura = this._factura.valorFactura
  }

  ngOnInit() {
    this.listaJugadores = this._jugador.listaJugadores;
    this.nombreCajero = this._login.nombreCajero;
    this.valorFactura = 0;
  }

}

class detalle implements detalleFactura{
  constructor(nombre:string, precio:number){
    this.nombreJugador = nombre;
    this.cantidad = 1;
    this.precio = precio;
  }
  nombreJugador:string;
  cantidad:number;
  precio:number
}