import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-detalle-factura',
  templateUrl: './ruta-detalle-factura.component.html',
  styleUrls: ['./ruta-detalle-factura.component.scss'],
})
export class RutaDetalleFacturaComponent implements OnInit {

  constructor(private readonly _url:Router,private readonly _route:ActivatedRoute,private readonly _httpClient:HttpClient) { }
  facturaId;
  detallesFactura;
  ngOnInit() {
    const parametrosConsulta$ = this._route.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        this.facturaId = parametrosConsulta.facturaId;
      }
    );

    this.cargarDetalleFactura();
  }

  cargarDetalleFactura(){

    const listaFacturas$ = this._httpClient.get('http://localhost:1337/detallefactura/?fkFacturaId='+this.facturaId);

    listaFacturas$
          .subscribe(
            (datos)=>{
              this.detallesFactura = datos;
            },
            (error)=>{
              console.log(error);
            }
          )
  }
}
