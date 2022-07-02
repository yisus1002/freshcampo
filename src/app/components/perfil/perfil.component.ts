import { CargarImagenService } from './../../services/cargar-imagen.service';
import { FreshcampoService } from './../../services/freshcampo.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
// import { SweetAlert } from 'sweetalert/typings/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit { 
  // Habilitar:boolean=true;
  loading:boolean=false;
  id:any=localStorage.getItem('idUser'); 
  usuario:any={};
  Cliente:any={
    nombre: '',
    apellido: '',
    avatar: '',
    correo: '',
    idg: '',
    rol: 0
  }; 
  constructor(public auth: AuthService,
              private router: Router,
              public FreshcampoService:FreshcampoService,
              public CargarImagenService:CargarImagenService, ){  
                this.id=JSON.parse(this.id);  
                console.log(this.CargarImagenService.images);
              }
  ngOnInit(): void { 
    this.detalleCliente();
  } 

 
  volver(){
    this.router.navigate(['/home'])
    this.CargarImagenService.habilitar=true;
  } 
  detalleCliente(){
    this.FreshcampoService.getCliente_Detalle(this.id).subscribe((data:any)=>{
      this.usuario=data 
      this.Cliente=data; 
    });
  }

 async actualizar(){
    if(this.CargarImagenService.images.length === 0){
      this.subircambio();
    }else{
      this.Cliente['avatar']=this.CargarImagenService.images[this.CargarImagenService.images.length-1]
      this.subircambio();
    }


  }
  subircambio(){
    this.FreshcampoService.putCliente(this.id, this.Cliente).subscribe(ele=>{
      if(ele){
        setTimeout(() => {  
          this.loading=false;  
        Swal.fire({
          title: 'Datos actualizados', 
          icon: 'success',
          confirmButtonText: `OK!` , 
        })
        .then(() => {
          window.location.reload();
      });
    }, 1000);
      }
    });
    this.CargarImagenService.habilitar=true;
    this.loading=true;
   
  }

}