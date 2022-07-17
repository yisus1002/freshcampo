import { CarritoServiceService } from './../../services/carrito-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public carr: CarritoServiceService) { }

  ngOnInit(): void {
    this.carr.verTodoelcarrito(); 
    // setTimeout(() => {
    //   console.log('hola')
    //   this.carr.vermicarrito()
    // }, 1000);
  }

}
