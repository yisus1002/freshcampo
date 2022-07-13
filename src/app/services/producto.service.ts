import { Producto } from './../models/producto';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreshcampoService } from './freshcampo.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // producto:Producto[]=[];
  // produ=
  fechaActuall:any=''
  Pro:any[]=[];
  Producto:any={
    ClienteId:'',
    nombre:'',
    descripcion:'',
    precio:0,
    cantidad:0,
    img:'',
    tipo:'',
    fecha:'',
    estado:'',
  }

  item:any=[
    'Verduras',
    'Granos',
    'Frutas',
    'Lacteos',
    'Proteninas'
  ]

  idc:any=localStorage.getItem('idUser'); 
  
  api= 'https://62b2349620cad3685c8b152c.mockapi.io/Cliente/'

  constructor(private http:HttpClient,
              private auth:AuthService,
              private us: FreshcampoService) {
                this.idc=JSON.parse(this.idc); 
                console.log('El servicio producto esta listo '+ this.idc)
                // this.verproducto()
                this.listarproductos()
                
               }
  public getProductoCliente(id:any):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.api}${id}/Producto`);
  }
  public getDetalleProductoCliente(id:any, idp:any):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.api}${id}/Producto/${idp}`);
  }

  public postProducto(producto:Producto):Observable<any>{
    return this.http.post<any>(`${this.api}${this.idc}/Producto`, producto);
  }

  public putProducto(id:any, producto:Producto, idp:any):Observable<any>{
    return this.http.put<any>(`${this.api}${id}/Producto/${idp}`,producto)
  }
  
  public delProducto(id:any,idp:any):Observable<any>{
    return this.http.delete<any>(`${this.api}${id}/Producto/${idp}`)

  }
  
  
  
  
  verproducto(){
    this.getProductoCliente(this.idc).subscribe((data:any)=>{
      console.log(data)
    })
  }

  listarproductos(){
    this.us.getCliente().subscribe((dat:any)=>{
      for(var i=0;i<dat.length;i++){ 
        this.getProductoCliente(i+1).subscribe((dat:any)=>{
          if(dat.length >0){ 
            for(var i=0;i<dat.length;i++){ 
              this.Pro.push(dat[i]) 
              // console.log(this.Pro)
            }
          }  
        })
      }
    })
  }

  crearProducto(){
    this.postProducto(this.Producto).subscribe((data:any)=>{
      console.log(data)
    })
  }
  
}
