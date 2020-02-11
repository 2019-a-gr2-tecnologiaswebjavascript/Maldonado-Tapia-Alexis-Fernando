import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/dto/servicios/login.service';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss'],
})
export class RutaLoginComponent implements OnInit {

  constructor(private readonly _loginService:LoginService,private readonly _router:Router, private readonly _httpClient:HttpClient, private readonly alertController: AlertController ) { }

  ngOnInit() {}

  login(formularioLogin){
    var correo:string = formularioLogin.controls.correo.value;
    var pass:string = formularioLogin.controls.contrasenia.value
    this.buscarUsuario(correo, pass);
    //this.buscarUsuario(formularioLogin.controls.correo.value, formularioLogin.controls.contrasenia.value)
    /*const url = ['menuPrincipal'];
    this._router.navigate(url);*/
  }

  buscarUsuario(nombre, pass){
      const listaUsuarios$ = this._httpClient.get('http://localhost:1337/usuario/?correoUsuario='+nombre+'&passwordUsuario='+pass);
  
      listaUsuarios$
            .subscribe(
              (datos)=>{
                try{
                  var cajeroId = datos[0].id;
                  this._loginService.setCajeroId(cajeroId);
                  /*const url = ['menuPrincipal'];
                  this._router.navigate(url);*/
                }catch(e){
                  this.presentAlert();
                }
              },
              (error)=>{
                console.log(error);
              }
            )
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fallo en el Login',
      message: 'Correo o contraseña invalidas',
      buttons: ['OK']
    });

    await alert.present();
  }

}
