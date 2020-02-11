import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private readonly _httpClient:HttpClient,
              private readonly _url:Router,
              private readonly _route:ActivatedRoute
              ) {}

  listaFacturas:Factura[] = [];
  listaFacturasMostrar:Factura[] = [];
  datosAux;


  ngOnInit(){
    this.consultarFacturasUsuario();

    
  }


  onChange($event){
    this.listaFacturas = [];
    this.listaFacturasMostrar = [];
    const listaFacturas$ = this._httpClient.get('http://localhost:1337/factura/?where={"nombreCliente":{"contains":"'+$event.target.value+'"}}');

    listaFacturas$
          .subscribe(
            (datos)=>{
              this.datosAux = datos;
                for(let i in datos){
                this.listaFacturas.push(new Factura(datos[i].nombreCliente,datos[i].id, datos[i].fechaFactura.substring(0,10), datos[i].total, datos[i].fkUsuario.nombreUsuario));
              }

              this.listaFacturasMostrar = this.listaFacturas;
              //
            },
            (error)=>{
              console.log(error);
            }
          )
  }

  buscar(){
    this.consultarFacturasUsuario();
  }

  verDetalleFactura(item){
    console.log(item.id);
    const parametros = {
      queryParams: {
        facturaId: item.id
      }
    }
    const url = ['buscarDetalle'];
    this._url.navigate(url, parametros);
  
  }

  consultarFacturasUsuario(){
    this.listaFacturas = [];
    this.listaFacturasMostrar = [];
    const listaFacturas$ = this._httpClient.get('http://localhost:1337/factura');

    listaFacturas$
          .subscribe(
            (datos)=>{
              this.datosAux = datos;
              console.log(datos);
              for(let i in datos){
                this.listaFacturas.push(new Factura(datos[i].nombreCliente,datos[i].id, datos[i].fechaFactura.substring(0,10), datos[i].total, datos[i].fkUsuario.nombreUsuario));
              }

              this.listaFacturasMostrar = this.listaFacturas;
              //
            },
            (error)=>{
              console.log(error);
            }
          )
  }


}

class Factura{
  id:number;
  nombreCliente:string;
  fecha:Date;
  total:string;
  cajero:string

  constructor(nombreCliente,id, fecha, total, cajero) {
    this.nombreCliente = nombreCliente;
    this.id = id;
    this.fecha = fecha;
    this.total = total;
    this.cajero = cajero;
  }
}