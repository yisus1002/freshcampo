import { ProductoService } from './producto.service';
import { Carrito } from './../models/carrito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '@auth0/auth0-angular';

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
              public pro: ProductoService,
              public auth:AuthService) {
    this.idcliente=JSON.parse(this.idcliente)
   }


   public postCarrito(Carrito: Carrito):Observable<any>{
    return this.http.post<any>(`${this.api}`, Carrito);
  }
  public getCarrito():Observable<Carrito[]>{
    return this.http.get<Carrito[]>(`${this.api}`)
  }
  public delCarrito(id:any):Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`)
  }
 
  borrar(idp:any){
    console.log(idp)
    this.getCarrito().subscribe((dat:any)=>{
     if(dat){ 
      let pro= dat.filter((Element:any )=> Element.idProducto===idp)
      if(pro){
        console.log(pro[0].id)
         Swal.fire({
          title: '¿Desea eliminar el producto ?', 
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.delCarrito(pro[0].id).subscribe((dat:any)=>{
              console.log(dat)
              setTimeout(()=>{
                Swal.fire(
                  'Deleted!',
                  'El producto ha sido borrado',
                  'success'
                )
                this.verTodoelcarrito()
              }, 300)
            })
          }
        })
      }
     }
    })
  }
  // eliminar
  agregar(){
    this.car['idProducto']=this.productoelegido.idproducto; 
    // console.log(this.car)
    // console.log(this.productoelegido)
  }
  agregarcarrito(){
    this.auth.isAuthenticated$.subscribe((data: any) => {
      if(data){
        let arr:any[]=[]
        const carrito = new Carrito(
          this.car['idCliente'],
          this.car['idProducto'],
          this.car['cantidad']
        );
        this. postCarrito(carrito).subscribe((data)=>{
          arr=data;
          Swal.fire({
            title: 'Se ha añadido a su carrito', 
            icon: 'success',
            confirmButtonText: `OK!` , 
          })
        })
        // return arr;
      }else{
        this.auth.loginWithRedirect()
      }
    })
  }

  verTodoelcarrito(){
    this.arr=[];
    this.pro.listarproductos()  
    this.getCarrito().subscribe((data:any)=>{
      for(var i=0;i<data.length;i++){
        let id = data[i]['idCliente']
        if(id === this.idcliente){
          this.arr.push(data[i])
          // console.log(this.arr)
        }
      }
    }) 
    setTimeout(() => {
      // console.log('hola')
      this.vermicarrito();
    }, 900);
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
    // console.log(this.pro.Pro)

  }

}