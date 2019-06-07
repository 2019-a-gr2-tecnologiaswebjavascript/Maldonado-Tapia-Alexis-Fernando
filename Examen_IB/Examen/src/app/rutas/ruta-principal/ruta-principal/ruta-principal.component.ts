import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-principal',
  templateUrl: './ruta-principal.component.html',
  styleUrls: ['./ruta-principal.component.css']
})
export class RutaPrincipalComponent implements OnInit {

  constructor(private readonly _router:Router) { }

  ngOnInit() {
  }
  administrarGrupos(){
    const url = ['gestionar-grupos'];
    this._router.navigate(url);
  }

  compras(){
    const url = ['comprar'];
    this._router.navigate(url);
  }

  verCompras(){
    const url = ['revisar'];
    this._router.navigate(url);
  }

}
