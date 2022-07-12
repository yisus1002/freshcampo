import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
anio:any;
constructor(public pro:ProductoService) {
  this.anio= new Date();
  // console.log(pro.Pro) 
 }
 today: Date = new Date();
 pipe = new DatePipe('en-US');
 todayWithPipe:any = null;
 ngOnInit(): void {
   this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
 }
}
