import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { HttpEquipoService } from 'src/app/dto/servicios/http-equipo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ruta-buscar-equipos',
  templateUrl: './ruta-buscar-equipos.component.html',
  styleUrls: ['./ruta-buscar-equipos.component.scss'],
})
export class RutaBuscarEquiposComponent implements OnInit {

  constructor(private readonly _httpClient: HttpClient,
              private readonly _httpEquipo: HttpEquipoService,
              private alertController: AlertController
              ) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Crear Equipo',
      message: 'El Equipo ha sido creado',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  guardarEquipo(formulario){
    

    var nombre:string = formulario.controls.nombre.value;
    var liga:string = formulario.controls.liga.value;
    var fecha:string = formulario.controls.fecha.value;
    var numeroCopas:number = formulario.controls.copas.value;
    var campeonActual:boolean = formulario.controls.campeonActual.value;
       
    const equipoCrear$ = this._httpEquipo.crear({
      nombre: nombre,
      liga: liga,
      fechaCreacion:fecha,
      numeroCopasInternacionales: numeroCopas,
      campeonActual: campeonActual,
      
    });

    equipoCrear$
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
