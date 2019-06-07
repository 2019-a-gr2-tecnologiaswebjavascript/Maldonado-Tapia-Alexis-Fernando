import { Component, OnInit } from '@angular/core';
import { factura } from 'src/app/interfaces/factura';
import { FacturaService } from 'src/app/servicios/factura/factura.service';

@Component({
  selector: 'app-ruta-revisar-compras',
  templateUrl: './ruta-revisar-compras.component.html',
  styleUrls: ['./ruta-revisar-compras.component.css']
})
export class RutaRevisarComprasComponent implements OnInit {

  constructor(private readonly _factura:FacturaService) { }

  listaFacturas:factura[] = [];

  ngOnInit() {
    this.listaFacturas = this._factura.listaFacturas;
  }

  buscarFactura(formulario){
    this._factura.buscarFactura(formulario.controls.filtro.value);
    this.listaFacturas = this._factura.listaFacturasMostrar;
  }

}
