import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  cajeroId:number = 1;

  setCajeroId(cajeroId:number){
    this.cajeroId= cajeroId;
  }
}
