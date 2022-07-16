import { CargarImagenService } from './cargar-imagen.service';
import { Producto } from './../models/producto';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreshcampoService } from './freshcampo.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService { 

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  fechaActuall:any = null;  


  publicar:any=false

  Pro:any[]=[];
  Producto:any={
    ClienteId:'',
    nombre:'',
    descripcion:'',
    precio:0,
    cantidad:0,
    img:'',
    tipo:'',
    fecha:this.pipe.transform(Date.now(), 'dd/MM/yyyy') ,
    estado:true, 
  }

  loading:any=''
  filtro:string= 'Todos'
  termino:string=''

  item:any=[
    'Verduras',
    'Granos',
    'Frutas',
    'Lacteos',
    'Proteinas'
  ]

  idc:any=localStorage.getItem('idUser'); 
  
  api= 'https://62b2349620cad3685c8b152c.mockapi.io/Cliente/'

  constructor(private http:HttpClient,
              private auth:AuthService,
              private us: FreshcampoService,
              public cimg: CargarImagenService,) {
                this.idc=JSON.parse(this.idc); 
                console.log('El servicio producto esta listo '+ this.idc)  
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

  public putProducto(producto:Producto, idp:any):Observable<any>{
    return this.http.put<any>(`${this.api}${this.idc}/Producto/${idp}`,producto)
  }
  
  public delProducto(id:any,idp:any):Observable<any>{
    return this.http.delete<any>(`${this.api}${id}/Producto/${idp}`)

  }
  
  buscar(){

  }
  
  
  verproducto(){
    this.Pro=[]
    this.getProductoCliente(this.idc).subscribe((data:any)=>{
      this.Pro=data
      console.log(this.Pro)
    })
  }

  listarproductos(){
    this.loading= true
    this.Pro=[]
    this.us.getCliente().subscribe((dat:any)=>{
      for(var i=0;i<dat.length;i++){ 
        this.getProductoCliente(i+1).subscribe((dat:any)=>{
          if(dat.length >0){ 
            for(var i=0;i<dat.length;i++){
              let tipo = dat[i]['tipo']
              if(this.filtro.toUpperCase()===tipo.toUpperCase()){
                this.Pro.push(dat[i])
                this.loading= false
              }else if(this.filtro.toUpperCase()==='TODOS'){
                this.Pro.push(dat[i])
                this.loading= false
              }
              this.loading= false
            }
          } 
        })
      }
    })
  }

  crearProducto(){
    this.Producto['img']=this.cimg.images
    const CProducto = new Producto(
      this.Producto['ClienteId'],
      this.Producto['nombre'],
      this.Producto['descripcion'],
      this.Producto['precio'],
      this.Producto['cantidad'],
      this.Producto['img'],
      this.Producto['tipo'],
      this.Producto['fecha'],
      this.Producto['estado'], 
    );
    this.postProducto(CProducto).subscribe((data:any)=>{
      console.log(data)

      this.verproducto()
    })
  }

  elimminarproducto(idp:any){ 
    Swal.fire({
      title: '¿Desea eliminar el producto ?', 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delProducto(this.idc, idp).subscribe((dat:any)=>{
          console.log(dat)
          Swal.fire(
            'Deleted!',
            'El producto ha sido borrado',
            'success'
          )
          this.verproducto()
        })
      }
    })
  }
  editarProducto(){
    if(this.cimg.images.length === 0){
      this.editar()
    }else{
      this.Producto['img']=this.cimg.images
      this.editar()
    }
  }
  editar(){
    this.putProducto(this.Producto,this.Producto['idproducto']).subscribe((dat:any)=>{
      console.log(dat)
      this.verproducto()
    })
  }
  
}