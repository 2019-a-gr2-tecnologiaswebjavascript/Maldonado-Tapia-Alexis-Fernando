import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpFacturaService } from '../dto/servicios/http-factura.service';
import { AlertController } from '@ionic/angular';
import { HttpDetalleFacturaService } from '../dto/servicios/http-detalle-factura.service';
import { LoginService } from '../dto/servicios/login.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private readonly _httpClient:HttpClient, private readonly _httpFactura:HttpFacturaService,
              private alertController: AlertController,
              private _httpDetalleFactura: HttpDetalleFacturaService,
              private readonly _loginService:LoginService) {}
  listaEquipos;
  idEquipo;
  listaJugadores;
  listaDetalleFactura = [];
  total:number =0;

  cambioSelect(){
    const listaJugadores$ = this._httpClient.get('http://localhost:1337/jugador/?fkEquipoFutbol='+this.idEquipo);

    listaJugadores$
          .subscribe(
            (datos)=>{
              console.log(datos);
              this.listaJugadores = datos;
            },
            (error)=>{
              console.log(error);
            }
          )
  }


  


  ngOnInit(){
    this.llenarComboEquipos();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ingresar Factura',
      message: 'La factura a sido creada exitosamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  guardarFactura(formulario){
    var nombreCliente:string = formulario.controls.nombreCliente.value;
    var fecha:string = formulario.controls.fecha.value;
    var cedula:string = formulario.controls.cedula.value;
    var telefono:string = formulario.controls.telefono.value;
    var direccion:string = formulario.controls.direccion.value;
    var correo:string = formulario.controls.correo.value;

    const facturaCrear$ = this._httpFactura.crear({
      fechaFactura: fecha, 
      nombreCliente: nombreCliente,
      ciCliente: cedula,
      direccion: direccion,
      telefono: telefono,
      correo: correo,
      total: this.total,
      fkUsuario: this._loginService.cajeroId
    });



    facturaCrear$
    .subscribe(
      (factura)=>{
        console.log(factura);
        var idFactura:number = factura.id;
        this.guardarDetallesFactura(idFactura);
        this.presentAlert();
        this.listaDetalleFactura=[];
        formulario.reset();
      },
      (error)=>{
        console.error(error);
      },
    );


  }

  guardarDetallesFactura(idFactura){
    this.listaDetalleFactura.forEach(detalle => {
      const detalleFacturaCrear$ = this._httpDetalleFactura.crear({
        cantidad: detalle.cantidad, 
        fkFacturaId: idFactura,
        fkJugador: detalle.idJugador
      });

      detalleFacturaCrear$.subscribe(
        (detalle)=>{
          console.log(detalle);
        },
        (error)=>{
          console.log(error);
        }
      )
    });
  }

  llenarComboEquipos(){
    const listaUsuarios$ = this._httpClient.get('http://localhost:1337/equipoFutbol/?select=nombre,id');

    listaUsuarios$
          .subscribe(
            (datos)=>{
              console.log(datos);
              this.listaEquipos = datos;
            },
            (error)=>{
              console.log(error);
            }
          )
  }

  cambiarTotal(valor){
    this.total += valor;
  }

  disminuirJugador(item){
    let indice = -1;
    console.log('voy a disminuir detalle');
    if(this.listaDetalleFactura.some((value, index)=>{
      if(value.nombreJugador == item.nombreJugador && value.cantidad - 1 > 0){
        indice = index;
        return true
      }else{
        return false;
      }
    }
    )){
      console.log(indice);
      this.listaDetalleFactura[indice].cantidad --;
      this.cambiarTotal(item.precio*-1)
    }else{

      indice = this.listaDetalleFactura.indexOf(item);
      this.listaDetalleFactura.splice(indice, 1);
      this.cambiarTotal(item.precio*-1);
    }
  }

  agregarJugador(item){
    console.log('aqui en Detalle');
    let indice = -1;

    if(this.listaDetalleFactura.some((value, index)=>{
      console.log(value.nombreCamiseta);
      console.log(item.nombreCamiseta);
      if(value.nombreJugador == item.nombreCamiseta){
        indice = index;
        return true
      }else{
        return false;
      }
    }
    )){
      this.listaDetalleFactura[indice].cantidad ++;
      this.cambiarTotal(item.precio);
    }else{
      this.listaDetalleFactura.splice(0, 0, new Detalle(item.id, item.nombreCamiseta, 1, item.precio));
      this.cambiarTotal(item.precio);
    }
    console.log(this.listaDetalleFactura)
  }
  
  delete(){
    console.log('borrar');
  }
}

class Detalle{
  idJugador:number;
  nombreJugador:string;
  cantidad: number;
  precio: number;

  constructor(idJugador,nombreJugador, cantidad, precio){
    this.idJugador = idJugador;
    this.nombreJugador = nombreJugador;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}
