import { Injectable } from '@angular/core';
import { detalleFactura } from 'src/app/interfaces/detalle-factura';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {

  constructor(private readonly _detalleFactura:DetalleFacturaService) { }

  listaDetalle:detalleFactura[] = []

  disminuirDetalle(item:detalleFactura){
    let indice = -1;
    console.log('voy a disminuir detalle');
    if(this.listaDetalle.some((value, index)=>{
      if(value.cantidad - 1 > 0){
        indice = index;
        return true
      }else{
        return false;
      }
    }
    )){
      this.listaDetalle[indice].cantidad --;
    }else{
      
      this.listaDetalle.splice(indice, 1);
    }
    console.log('los disminui')
  }

  agregarDetalle(item:detalleFactura){
    console.log('aqui en Detalle');
    let indice = -1;

    if(this.listaDetalle.some((value, index)=>{
      if(value.nombreJugador == item.nombreJugador){
        indice = index;
        return true
      }else{
        return false;
      }
    }
    )){
      this.listaDetalle[indice].cantidad ++;
    }else{
      this.listaDetalle.splice(0, 0, item);
    }

    console.log(this.listaDetalle);
  }

  limpiarDetalles(){
    this.listaDetalle = []
    
  }
}
