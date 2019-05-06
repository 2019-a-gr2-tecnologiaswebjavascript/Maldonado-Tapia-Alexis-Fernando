import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-comic',
  templateUrl: './imagen-comic.component.html',
  styleUrls: ['./imagen-comic.component.css']
})
export class ImagenComicComponent implements OnInit {

  @Input()
  imagen: string;

  constructor() { }

  ngOnInit() {
  }

}
