import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  // items:any=
  items:any[]= [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];
anio:any;
constructor() {
  this.anio= new Date();
 }
 today: Date = new Date();
 pipe = new DatePipe('en-US');
 todayWithPipe:any = null;
 ngOnInit(): void {
   this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
 }
}
