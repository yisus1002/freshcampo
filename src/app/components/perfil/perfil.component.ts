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
  Habilitar:boolean=true;
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
              public FreshcampoService:FreshcampoService              ){  
                this.id=JSON.parse(this.id); 
                // this.detalleCliente();
              }
  ngOnInit(): void {
    // console.log('ngon');
    this.detalleCliente();
  } 

 
  volver(){
    this.router.navigate(['/home'])
    this.Habilitar=true;
  }
  habilitar(){
    this.Habilitar=true;
  }
  detalleCliente(){
    this.FreshcampoService.getCliente_Detalle(this.id).subscribe((data:any)=>{
      this.usuario=data 
      this.Cliente=data;
      // console.log(this.Cliente)
    });
  }

  actualizar(){
    this.FreshcampoService.putCliente(this.id, this.Cliente).subscribe(ele=>{
      // console.log(ele) 
      if(ele){
        Swal.fire({
          title: 'Datos actualizados', 
          icon: 'success',
          confirmButtonText: `OK!` , 
        })
        .then(() => {
          window.location.reload();
      });
      }
    });
    this.Habilitar=true;
    this.loading=true;
    setTimeout(() => {  
      this.loading=false; 
    }, 1000);

  }

}