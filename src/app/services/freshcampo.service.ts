import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './../models/cliente';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreshcampoService {
  Cliente:Cliente[]=[];
  apli = `https://62b2349620cad3685c8b152c.mockapi.io/`; 
 tok:any='';
 id:any='';
  constructor(private http:HttpClient,
              private auth:AuthService) {
    console.log('servicio listo ')
    // this.user();
  }

   getquery(query:String){
    const apli = `https://62b2349620cad3685c8b152c.mockapi.io/${query}`
    return apli;
   }

  public getCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apli}Cliente`);
  }
   
  public getCliente_Detalle(id:any):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apli}Cliente/${id}`);
  }
  public postCliente(cliente: Cliente):Observable<any>{
    return this.http.post<any>(`${this.apli}Cliente`, cliente);
  }
  public putCliente(id:string, cliente: Cliente):Observable<any>{
    return this.http.put<any>(`${this.apli}Cliente/${id}`, cliente);
  }  

  public user(){
    this.auth.getUser().subscribe(el=>{
      this.tok=el?.sub
      // console.log(this.tok)
    }); 
    // this.obtenerUser();
  }
  // obtenerUser(id:any){
  //   this.getCliente().subscribe((data:any)=>{
  //     const user = data.find((ele:any)=>ele.idg===id )
  //     if(user){
  //       this.id=user.id;
  //       console.log(this.id)
  //     }
  //   })
  // }


}
