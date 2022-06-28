import { HttpClient } from '@angular/common/http';
import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreshcampoService {
  Cliente:Cliente[]=[];
  apli = `https://62b2349620cad3685c8b152c.mockapi.io/`

  constructor(private http:HttpClient) {
    console.log('servicio listo ')
    // this.getquery('Cliente')
    // this.getCliente()
   }

   getquery(query:String){
    const apli = `https://62b2349620cad3685c8b152c.mockapi.io/${query}`
    return apli;
   }

  public getCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apli}Cliente`);
  }
   
  public getCliente_Detalle(id:string):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apli}Cliente/${id}`);
  }
  public postCliente(cliente: Cliente):Observable<any>{
    return this.http.post<any>(`${this.apli}Cliente`, cliente);
  }   
}
