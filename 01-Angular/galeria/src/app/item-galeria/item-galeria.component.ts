import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = "Licoreria";

  @Input()
  nombreItem;

  @Input()
  textoBoton;


  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo '+this.nombreItem);
  }

}
/*
@DecoratorsClase()
class Usuario{
  
  private nombre = "Alexis";

  constructor(nombre){
    
  }

  metodoPublico(){

  }

  private metodoPrivado(){

  }

  protected metodoProtected(){

  }
}*/