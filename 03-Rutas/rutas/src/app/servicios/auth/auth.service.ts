import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estarLogeado : boolean = false;
  constructor(private readonly _router:Router) { }

  login(password: string, usuario:string){
    if(password === '1234' && usuario === 'alexis'){
      this.estarLogeado = true;
      const url = ['/creditos', '12', '12'];
      const parametros = {
        queryParams: {
          nombre: 'Alexis',
          apellido: 'Maldonado',
          edad: 22
        }
      }
      this._router.navigate(url, parametros);
      return true;
    }else{
      return false;
    }
  }

  logout(){
    console.log('saliendo');
    this.estarLogeado = false;
  }
}
