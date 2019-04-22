import { Injectable } from '@angular/core';
import { itemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService {
    carritoCompras:itemCarritoCompras[] = [];
    
    agregarCarritoDeCompras(itemCarrito:itemCarritoCompras):itemCarritoCompras[]{
        const identificador = itemCarrito.valor;

        let indiceItem = -1;

        const existeElItem = this.carritoCompras.some(
            (item:itemCarritoCompras, indice)=>{
                if(item.valor == identificador){
                    indiceItem = indice;
                    return true;
                }else{
                    return false;
                }
                return item.valor == identificador
            }

        );

        if(existeElItem){
            this.añadirAlContador(indiceItem);
            console.log('Se añadio al carrito');
        }else{
            this.añadirAlCarrito(itemCarrito);
        }

        console.log('Se agrego el item carrito', itemCarrito);
        return this.carritoCompras;
    }

    private añadirAlContador(indice:number){
        this.carritoCompras[indice].cantidad++;
    }

    private añadirAlCarrito(item:itemCarritoCompras){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }
}
/*
const respuesta = [1,2,3].forEach( //undefined
    (valor)=>{
        console.log('Valor',valor);
        if(valor == 1){
            console.log('Te encontre 1!')
        }                 
    }
);

const respuestaFind = [1,2,3].find(
    (valor:number):boolean => {
        return valor == 5;
    }
)


const respuestaSome = [1,2,3].some( //boolean
    (valor:number):boolean => {
        return valor == 5;  //Hay algun 5?
    }
)

const respuestaEvery = [1,2,3].every( //boolean
    (valor:number):boolean => {
        return valor > 0;  //Todos son 3?
    }
)

console.log(respuestaEvery);
*/
/*function busqueda(valor, indice, arreglo){
    console.log('Valor',valor);
    console.log('Indice',indice);
    console.log('Arreglo',arreglo);   
    if(valor == 1){
        console.log('Te encontre 1!')
    }                 
}*/