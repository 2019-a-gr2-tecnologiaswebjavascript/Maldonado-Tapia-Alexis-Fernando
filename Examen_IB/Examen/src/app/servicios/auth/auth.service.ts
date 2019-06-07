import { Injectable } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estarLogeado:boolean = false;
  constructor(private readonly _loginService:LoginServiceService,
              private readonly _router:Router) { }

  login(){
    if(this._loginService.nombreCajero === ""){
      console.log('Registre el nombre del Cajero');
      const url = ['home']
      this._router.navigate(url)

      return false;
    }else{
      this.estarLogeado = true;
      const url = ['principal'];
      this._router.navigate(url);
      return true;
    }
  }
}
