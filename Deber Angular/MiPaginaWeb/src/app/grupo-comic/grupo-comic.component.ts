import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grupo-comic',
  templateUrl: './grupo-comic.component.html',
  styleUrls: ['./grupo-comic.component.css']
})
export class GrupoComicComponent implements OnInit {

  constructor() { }

  @Input()
  bannerImg:string

  @Input()
  img1:string
  @Input()
  img2:string
  @Input()
  img3:string
  @Input()
  img4:string
  @Input()
  img5:string

  @Input()
  Titulo:string

  @Input()
  Subtitulo:string




  ngOnInit() {
  }

}
