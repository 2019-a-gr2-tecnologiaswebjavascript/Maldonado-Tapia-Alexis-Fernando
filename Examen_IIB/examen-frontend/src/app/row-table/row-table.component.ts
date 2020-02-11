import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
})
export class RowTableComponent implements OnInit {

  constructor(private readonly _router:Router,) { }
  @Input()
  id

  @Input()
  nombre

  @Input()
  liga

  @Input()
  numeroCopas

  @Input()
  campeonActual:boolean

  
  ngOnInit() {}

  buscarJugadores(){
    const parametros = {
      queryParams: {
        equipoId: this.id,
        equipoNombre: this.nombre
      }

    }
    const url = ['buscarJugadores'];
    this._router.navigate(url, parametros);
  }
}
