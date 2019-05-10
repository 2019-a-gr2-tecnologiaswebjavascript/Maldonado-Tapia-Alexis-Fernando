import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _router:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._router.params;
    //el signo de dolar significa que esa variable es un observable

    const parametrosConsulta$ = this._router.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta:', parametrosConsulta);
      }
    )

    console.log('Inicio');
    parametros$.subscribe(
      (parametros)=>{ //ok
        console.log('Parametros:', parametros)

      },
      (error)=>{ // :(

      },
      ()=>{ // Completado
        console.log('Completo');
      }
    )
  }

}
