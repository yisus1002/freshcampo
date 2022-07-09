import { FreshcampoService } from './../../../services/freshcampo.service';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit { 
  Cliente:any={
    nombre: '',
    apellido: '',
    avatar: '',
    correo: '',
    idg: '',
    rol: 0
  }; 
id:any='';
  constructor(
    private router: Router,
    public auth: AuthService,
    private FreshcampoService:FreshcampoService,
  ) {  
    this.verUsuario() 
}
    
    ngOnInit(): void { }
  logout(){
    this.auth.logout();
    localStorage.removeItem('idUser');
  } 
   verUsuario(){ 
      this.auth.getUser().subscribe(usuario =>{ 
        this.Cliente['nombre']=usuario?.given_name;
        this.Cliente['apellido']=usuario?.family_name;
        this.Cliente['idg']=usuario?.sub;
        this.Cliente['correo']=usuario?.email;
        this.Cliente['avatar']=usuario?.picture; 
        this.cargarCliente();   
  });
  }
  crearcliente(){

    const cliente= new Cliente(
      this.Cliente['nombre'],
      this.Cliente['apellido'],
      this.Cliente['avatar'], 
      this.Cliente['correo'], 
      this.Cliente['idg'],
      this.Cliente['rol']);

    this.FreshcampoService.postCliente(cliente).subscribe(
      data=>{
        console.log(data) 
        localStorage.setItem('idUser', JSON.stringify(data.id))
      }
    )
  }
  cargarCliente(){
    this.FreshcampoService.getCliente().subscribe(
      data =>{ 
        const usuario= data.find(
          elemento => elemento.idg == this.Cliente['idg']);
        if(!usuario){
          this.crearcliente(); 
        }else{
            console.log('id'+usuario.id)
            localStorage.setItem('idUser', JSON.stringify(usuario.id))
            this.id=usuario.id
           this.detalleCliente();
        }

      }
    )
  }
   detalleCliente(){
   this.FreshcampoService.getCliente_Detalle(this.id).
    subscribe((data:any)=>{
      this.Cliente['avatar']=data['avatar'];
      this.Cliente['nombre']=data['nombre']
      this.Cliente['apellido']=data['apellido'];
      this.Cliente['correo']=data['correo'];
      this.Cliente['idg']=data['idg'];
      this.Cliente['rol']=data['rol']; 
      this.FreshcampoService.id=this.Cliente['rol']
    }); 
  }
 
}