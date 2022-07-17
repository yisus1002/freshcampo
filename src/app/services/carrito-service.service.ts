import { ProductoService } from './producto.service';
import { Carrito } from './../models/carrito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  idcliente:any=localStorage.getItem('idUser'); 
  api:any='https://62ccc2ba8042b16aa7d36742.mockapi.io/compra'
  carrito:Carrito[]=[]
  productoelegido:any=[]
  car:any={
    idCliente:JSON.parse(this.idcliente),
    idProducto:'',
    cantidad:1,
  }
  mostrar:any=false;
  arr:any[]=[]
  ar:any[] =[]
  constructor(public http:HttpClient,
              public pro: ProductoService) {
    this.idcliente=JSON.parse(this.idcliente)
   }


   public postCarrito(Carrito: Carrito):Observable<any>{
    return this.http.post<any>(`${this.api}`, Carrito);
  }
  public getCarrito():Observable<Carrito[]>{
    return this.http.get<Carrito[]>(`${this.api}`)
  }
  
  agregar(){
    this.car['idProducto']=this.productoelegido.idproducto; 
    // console.log(this.car)
    // console.log(this.productoelegido)
  }
  agregarcarrito(){
    let arr:any[]=[]
    const carrito = new Carrito(
      this.car['idCliente'],
      this.car['idProducto'],
      this.car['cantidad']
    );
    this. postCarrito(carrito).subscribe((data)=>{
      arr=data;
      // console.log(data);
    })
    return arr;
  }

  verTodoelcarrito(){
    this.arr=[];
    this.pro.listarproductos()  
    this.getCarrito().subscribe((data:any)=>{
      for(var i=0;i<data.length;i++){
        let id = data[i]['idCliente']
        if(id === this.idcliente){
          this.arr.push(data[i])
          console.log(this.arr)
        }
      }
    }) 
    setTimeout(() => {
      console.log('hola')
      this.vermicarrito();
    }, 700);
  }
  vermicarrito(){
     this.ar=[]
    for(var i=0;i<this.arr.length;i++){
      let idpro = this.arr[i]['idProducto']
      let cant = this.arr[i]['cantidad']
      let dat = this.pro.Pro.filter(element => element.idproducto === idpro);
      if(dat){
        dat[0]['cantidad'] = cant
        this.ar.push(dat[0])
      }
    }
    this.pro.Pro=this.ar
    console.log(this.pro.Pro)

  }

}