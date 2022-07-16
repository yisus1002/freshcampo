import { Carrito } from './../models/carrito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  api:any='https://62ccc2ba8042b16aa7d36742.mockapi.io/compra'

  constructor(public http:HttpClient) {

   }
   public postCompra(Carrito: Carrito):Observable<any>{
    return this.http.post<any>(`${this.api}`, Carrito);
  }
  




}
