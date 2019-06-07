import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Route } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoService {

  constructor(private readonly _authService:AuthService,
              private readonly _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):boolean{
                const estaLogueado = this._authService.estarLogeado
                if(estaLogueado){
                  return true;
                }else{
                  const url = ['/home', 'app'];
                  this._router.navigate(url);
                  console.log('No tiene permisos');
                  return false;
                }
                return false;
              }
}
