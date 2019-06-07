import { Component } from '@angular/core';
import { LoginServiceService } from './servicios/login-service.service';
import { AuthService } from './servicios/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen';
  constructor(private readonly _loginService:LoginServiceService,
    private readonly _auth:AuthService){

  }

  agregarCajero(){
    var nombreCajero = ((<HTMLInputElement>document.getElementById("nombreCajero")).value);
    this._loginService.setNombreCajero(nombreCajero);
    console.log('el cajero es '+this._loginService.nombreCajero);
    this._auth.login();    
  }
}
