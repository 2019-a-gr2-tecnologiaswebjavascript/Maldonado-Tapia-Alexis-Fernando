import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPaginaWeb';
  arregloComics = [
    {
      url: "../assets/img/deadpool.jpg",
    },
    {
      url: "../assets/img/infinitiwar.jpg",
    },
    {
      url: "../assets/img/magneto.jpg",
    },
    {
      url: "../assets/img/spider2.jpg",
    },
    {
      url: "../assets/img/spiderman1.jpg",
    },
    {
      url: "../assets/img/xmen.jpg",
    },  
    {
      url: "../assets/img/WWH5.jpg",
    },  
    {
      url: "../assets/img/xmen2.jpg",
    },  
    {
      url: "../assets/img/oldman.jpg",
    },
    

  ];

  arregloBanner = [
    {
      Titulo : "Marvel",
      Subtitulo : "Los mejores comics Marvel",
      bannerImg : "../assets/img/banner1.jpg",
      img1:"../assets/img/infinitiwar.jpg",
      img2:"../assets/img/WWH5.jpg",
      img3:"../assets/img/magneto.jpg",
      img4:"../assets/img/deadpool.jpg",
      img5:"../assets/img/oldman.jpg",
    },
    {
      Titulo : "DC",
      Subtitulo : "Los mejores comics DC",
      bannerImg : "../assets/img/bannerDc.jpg",
      img1:"../assets/img/dc1.jpg",
      img2:"../assets/img/dc2.jpg",
      img3:"../assets/img/dc3.jpg",
      img4:"../assets/img/dc4.jpg",
      img5:"../assets/img/dc5.jpg",
    },
    {
      Titulo : "Spiderman",
      Subtitulo : "Los mejores comics Spiderman",
      bannerImg : "../assets/img/bannerSpider.jpg",
      img1:"../assets/img/spiderman1.jpg",
      img2:"../assets/img/spider2.jpg",
      img3:"../assets/img/spider3.jpg",
      img4:"../assets/img/spider4.jpg",
      img5:"../assets/img/spider5.jpg",
    },
  ]
}
