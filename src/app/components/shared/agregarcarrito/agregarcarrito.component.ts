import { CarritoServiceService } from './../../../services/carrito-service.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarcarrito',
  templateUrl: './agregarcarrito.component.html',
  styleUrls: ['./agregarcarrito.component.css']
})
export class AgregarcarritoComponent implements OnInit {

  // @Input() cant:any=0

  constructor(public pro: ProductoService,
              public car:CarritoServiceService) { }

  ngOnInit(): void {

  }
  cantidad(valor:any){

    this.car.car['cantidad']=parseInt(valor,10);
    console.log(this.car.car)
  }

}
