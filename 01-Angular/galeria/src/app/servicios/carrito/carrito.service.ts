import { Injectable } from '@angular/core';
import { itemCarritoCompras } from '../../interfaces/item-carrito-compras';
<<<<<<< HEAD
=======
import { itemCarritoComprasDetallado } from 'src/app/interfaces/item-carrito-compras-detallados';
>>>>>>> desarrollo

@Injectable()
export class CarritoService {
    carritoCompras:itemCarritoCompras[] = [];
<<<<<<< HEAD
    
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
=======
    carritoComprasDetallado:itemCarritoComprasDetallado[] = [];

    agregarCarritoDeCompras(itemCarrito:itemCarritoCompras):itemCarritoComprasDetallado[]{
        const identificador = itemCarrito.valor;
        const identificadorTienda = itemCarrito.nombreTienda;

        let indiceTienda = -1;
        let indiceItem = -1;
        let existeItem = false;
        /*const existeElItem = this.carritoComprasDetallado.some(
            (item:itemCarritoComprasDetallado, indice)=>{
                if(item.nombreTienda == identificadorTienda){
                    indiceItem = indice;
                    return true;
                }else{
                    
                    return false;
                }
            }

        );*/
        const existeTienda = this.carritoComprasDetallado.some(
            (item:itemCarritoComprasDetallado, indice)=>{
                console.log(item.nombreTienda, identificador);
                if(item.nombreTienda == identificadorTienda){
                    indiceTienda = indice;
                    return true;

                }else{
                    return false;
                }  
            }
        );
        console.log(existeTienda);

        if(existeTienda){
            existeItem = this.carritoComprasDetallado[indiceTienda].items.some(
                (item:items, indice)=>{
                    console.log(item.valor, identificador);
                    if(item.valor == identificador){
                        indiceItem = indice;      
                        return true;
                    }else{
                        return false;
                    }
                }
            );
            console.log('Se añadio al carrito');
        }else{
            this.añadirAlCarrito(itemCarrito, indiceTienda);
        }

        if(existeItem && existeTienda){
            this.añadirAlContador(indiceTienda, indiceItem);
        }else if(existeTienda){
            this.añadirAlDetalle(indiceTienda, identificador);
        }

        console.log('Se agrego el item carrito', itemCarrito);
        return this.carritoComprasDetallado;
    }

    private añadirAlContador(indiceTienda:number, indiceItem:number){
        this.carritoComprasDetallado[indiceTienda].items[indiceItem].cantidad++;
    }

    private añadirAlDetalle(indiceTienda:number, nombreItem:string){
        const aux = new items(1, nombreItem);
        this.carritoComprasDetallado[indiceTienda].items.splice(0,0,aux);
    }

    private añadirAlCarrito(item:itemCarritoCompras, indice:number){
        const itemTienda:items[] = [];
        itemTienda.splice(0,0, new items(1, item.valor))
        const aux: itemCarritoComprasDetallado = {
            nombreTienda:item.nombreTienda,
            fechaCompra:item.fechaCompra,
            items:itemTienda
        };
        this.carritoComprasDetallado.splice(0,0,aux);
    }
    

}

class items {
    constructor(cantidad:number, valor:string) {
        this.valor = valor;
        this.cantidad = cantidad;

    }
    cantidad:number;
    valor:string;

>>>>>>> desarrollo
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