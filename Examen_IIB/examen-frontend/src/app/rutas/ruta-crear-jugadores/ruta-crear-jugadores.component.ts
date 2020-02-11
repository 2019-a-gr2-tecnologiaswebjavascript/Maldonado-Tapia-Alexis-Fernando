import { Component, OnInit } from '@angular/core';
import { HttpJugadorService } from 'src/app/dto/servicios/http-jugador.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-crear-jugadores',
  templateUrl: './ruta-crear-jugadores.component.html',
  styleUrls: ['./ruta-crear-jugadores.component.scss'],
})
export class RutaCrearJugadoresComponent implements OnInit {

  constructor(private readonly _httpJugador:HttpJugadorService,
              private alertController: AlertController,
              private _route:ActivatedRoute) { }
  equipoId:number = 0;
  ngOnInit() {  
    const parametrosConsulta$ = this._route.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        this.equipoId = parametrosConsulta.equipoId
      }
    );

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Crear Jugador',
      message: 'El Jugador ha sido creado',
      buttons: ['OK']
    });

    await alert.present();
  }

  guardarJugador(formulario){
    var numeroCamiseta:number = formulario.controls.numeroCamiseta.value;
    var nombreCamiseta:string = formulario.controls.nombreCamiseta.value;
    var nombreCompletoJugador:string = formulario.controls.nombre.value;
    var fecha:string = formulario.controls.fecha.value;
    var goles:number = formulario.controls.goles.value;
    var precio:number = formulario.controls.precio.value;
    
    const jugadorCrear$ = this._httpJugador.crear({
      numeroCamiseta: numeroCamiseta,
      nombreCamiseta: nombreCamiseta,
      nombreCompletoJugador:nombreCompletoJugador,
      fechaIngresoEquipo: fecha,
      goles: goles,
      precio:precio,
      fkEquipoFutbol:this.equipoId,
      
    });

    jugadorCrear$
    .subscribe(
      (nuevoEquipo)=>{
        console.log(nuevoEquipo);
        this.presentAlert();
        formulario.reset();
      },
      (error)=>{
        console.error(error);
      },
    );
   
  }

}
