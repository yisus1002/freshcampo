import { Producto } from './../../models/producto';
import { CarritoServiceService } from './../../services/carrito-service.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id:any='';
  anio:any;
constructor(public pro:ProductoService,
            public car:CarritoServiceService,
            public auth: AuthService) {
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
  this.pro.publicar ='Editar'
  this.pro.getDetalleProductoCliente(idc,idp).subscribe((dat:any)=>{
    console.log(dat)
    this.pro.Producto = dat 
  })

 }
 AgregarCarrito(Producto:any){
  this.auth.isAuthenticated$.subscribe((data:any)=>{
    if(data){
      this.car.car.cantidad=1
      this.car.productoelegido=Producto
      this.car.agregar()
    }else{
      this.auth.loginWithRedirect()
    }
  })

 }

}
