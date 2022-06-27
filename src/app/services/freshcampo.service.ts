// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreshcampoService {

  constructor() {
    console.log('servicio listo ')
    // this.getquery('Cliente')
   }

   getquery(query:String){
    const apli = `https://62b2349620cad3685c8b152c.mockapi.io/${query}`
    return apli;
   }
   
}
