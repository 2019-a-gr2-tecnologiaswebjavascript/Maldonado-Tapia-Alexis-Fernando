import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  clase = 'rojo';

  title = 'floreria';

  arregloFlores = [
    new Flor("Papitas", "a lo bestia"),
    new Flor("Carnitas", "gorditas"),
    new Flor("chicas", "cheveres")
  ];

  arregloFLoresJs = [
    {
      nombre: "papitas",
      descripcion: "a lo bestia",
      titulo: "Don Jose",
      notas:['Hot Dog', 'Hamburguesa']
    },
    {
      nombre: "carnitas",
      descripcion: "gorditas",
      titulo: "Don Pepito",
      notas:['Papitas', 'Empanadas']
    },
    {
      nombre: "chicas",
      descripcion: "cheveres",
      titulo: "Doña Maria",
      notas:['Motes', 'Fritadas']
    }
  ]

  constructor(private readonly _carritoService:CarritoService){

  }

  cambioChela(evento: boolean){
    console.log('Llego a chela: ', evento);
    const verde: string = 'verde';
    this.clase = verde;


  }

  cambioCerveza(evento: boolean){
    console.log('Llego a cerveza: ', evento);
    const verde: string = 'amarillo';
    this.clase = verde;
  }

  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }

}


class Flor{

  /*

  nombre: string;
  descripcion: string;

  constructor(nombre: string, descripcion: string){
    this.nombre = nombre;
    this.descripcion = descripcion;

  }

  TODO LO QUE ESTA ARRIBA SE PUEDE HACER EN LA LINEA DE ABAJO!!!!!!

*/

  constructor(public nombre: string, public descripcion: string){

  }

} 