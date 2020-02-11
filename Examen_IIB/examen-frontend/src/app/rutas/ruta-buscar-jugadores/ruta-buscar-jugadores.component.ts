import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ruta-buscar-jugadores',
  templateUrl: './ruta-buscar-jugadores.component.html',
  styleUrls: ['./ruta-buscar-jugadores.component.scss'],
})
export class RutaBuscarJugadoresComponent implements OnInit {

  constructor(private readonly _url:Router,private readonly _route:ActivatedRoute, private readonly _httpClient:HttpClient) { }

  equipoId: number = 0;
  equipoNombre: string = '';
  listaJugadores;
  listaJugadoresVisibles;
  busqueda: string = "";
  ngOnInit() {
    const parametrosConsulta$ = this._route.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        this.equipoId = parametrosConsulta.equipoId;
        this.equipoNombre = parametrosConsulta.equipoNombre;
      }
    );

    console.log(this.equipoId);

    this.buscarJugadores();
  }

  buscarJugadores(){
    const listaUsuarios$ = this._httpClient.get('http://localhost:1337/jugador/?fkEquipoFutbol='+this.equipoId);

    listaUsuarios$
          .subscribe(
            (datos)=>{

              this.listaJugadores = datos;
              this.listaJugadoresVisibles = this.listaJugadores;
              console.log(this.listaJugadores);
            },
            (error)=>{
              console.log(error);
            }
          )
  }

  onChange($event){

    const listaUsuarios$ = this._httpClient.get('http://localhost:1337/jugador/?where={"nombreCamiseta":{"contains":"'+$event.target.value+'"}}');
  
      listaUsuarios$
            .subscribe(
              (datos)=>{

                this.listaJugadores = datos;
                this.listaJugadoresVisibles = this.listaJugadores;

              },
              (error)=>{
                console.log(error);
              }
            )
  
  }
  crearJugadores(){
    const parametros = {
      queryParams: {
        equipoId: this.equipoId
      }
    }
    const url = ['crearJugadores'];
    this._url.navigate(url, parametros);
  }

}
