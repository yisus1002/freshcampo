import { FreshcampoService } from './freshcampo.service';
import { Injectable } from '@angular/core'; 
import { Storage } from '@angular/fire/storage';  
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import 'firebase/compat/storage'; 

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class CargarImagenService {
  storareRef = firebase.app().storage().ref();
  imagenes: any[] = [];
  progres: number= 0;
  activo:boolean=false;
  habilitar:boolean=true;
  images: any[]=[];
  constructor(private storage: Storage,
              private FreshcampoService:FreshcampoService,
              ) {         
                this.FreshcampoService.user();
                }
  async subirImagen(nombre: string, imgBase64: any) {

    try {
      let respuesta = await this.storareRef.child("users/" + nombre).putString(imgBase64, 'data_url'); 
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }

  }
  cargarImagen(event: any) {
    let archivos = event.target.files; 
    let nombre =this.FreshcampoService.tok;
    this.habilitar=true;
    this.activo=true;
    for (let i = 0; i < archivos.length; i++) {

      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
        // console.log(reader.result);
        this.imagenes.push(reader.result);
        this.subirImagen(nombre + "_" + Date.now(), reader.result).then(urlImagen => {  
          this.images=[]
          this.images.push(urlImagen);
          this.activo=false;
          this.habilitar=false;
          // console.log(urlImagen);
          console.log(this.images)
        }); 
      }
    }

  }
}