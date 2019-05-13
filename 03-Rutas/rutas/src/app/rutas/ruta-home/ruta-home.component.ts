import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _authService: AuthService) { }

  
  login(){
    this._authService.login('1234', 'alexis');
  }

  logout(){
    this._authService.logout();
  }
  ngOnInit() {
  }

}
