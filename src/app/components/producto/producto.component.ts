import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id:any='';
  anio:any;
constructor(public pro:ProductoService,) {
  this.anio= new Date();
  // console.log(pro.Pro) 
 }
 
 
 today: Date = new Date();
 pipe = new DatePipe('en-US');
 todayWithPipe:any = null;
 
 
 ngOnInit(): void {
   this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
   this.id=(this.pro.idc)
 }

 Eliminar(id:any){
  this.pro.elimminarproducto(id)
 }

 Editar(idc:any,idp:any){
  // console.log(idc+" "+idp)
  this.pro.publicar ='Editar'
  this.pro.getDetalleProductoCliente(idc,idp).subscribe((dat:any)=>{
    console.log(dat)
    this.pro.Producto = dat 
  })

 }

}
