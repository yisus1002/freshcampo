import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  img:any=[
    {img:'https://www.caracteristicas.co/wp-content/uploads/2016/04/campo-1-e1558303217442-800x400.jpg',
    descipcion:'Somos una organizacion encargada de conectar al sector primario productor campesino, entregando productos frescos a consumidores finales'},
    {img: 'https://www.namesnack.com/images/Namesnack-nombres-para-chacras-de-campo-2400x1600-2021084.jpeg?crop=40:21,smart&width=1200&dpr=2',
    descipcion:''},
    {img:'https://static.eldiario.es/clip/21b86a87-b71c-464d-9559-13468c86f2a9_16-9-discover-aspect-ratio_default_0.jpg',
    descipcion:''},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
