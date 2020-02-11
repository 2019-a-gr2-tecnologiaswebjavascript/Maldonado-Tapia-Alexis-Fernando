import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-table-jugador',
  templateUrl: './row-table-jugador.component.html',
  styleUrls: ['./row-table-jugador.component.scss'],
})
export class RowTableJugadorComponent implements OnInit {

  constructor() { }
  
  @Input()
  id

  @Input()
  nombreCamiseta

  @Input()
  numeroCamiseta

  @Input()
  precio

  @Input()
  equipoId

  @Input()
  equipoActual


  ngOnInit() {}

}
