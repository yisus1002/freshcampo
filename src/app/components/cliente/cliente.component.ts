
import { FreshcampoService } from './../../services/freshcampo.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  Client:any=[];
  admin:any=0;
  tok:any='';
  Cliente:any={
    nombre: '',
    apellido: '',
    avatar: '',
    correo: '',
    idg: '',
    rol: 0
  };
  id:any=localStorage.getItem('idUser'); 
  constructor(private cliente: FreshcampoService, 
              public auth: AuthService,
            ) { 

            }

  ngOnInit(): void {
    this.id=JSON.parse(this.id)
    this.detalle()
    this.usuario()
  }
  usuario(){
    this.cliente.getCliente_Detalle(this.id=JSON.parse(this.id)).subscribe((data:any)=>{
      this.admin=data['rol']
      this.tok=data['id']
    })
  }

  detalle(){
    this.cliente.getCliente().subscribe(cliente=>{
      this.Client=cliente; 
    })
  }
  cambiar_rol(id:any, val:any){ 
    this.cliente.getCliente_Detalle(id).subscribe((data:any)=>{
      this.Cliente['nombre']=data['nombre'];
      this.Cliente['apellido']=data['apellido'];
      this.Cliente['correo']=data['correo'];
      this.Cliente['rol']=val;
      this.Cliente['idg']=data['idg'];
      this.Cliente['avatar']=data['avatar'];
      // console.log(this.Cliente)
      this.cliente.putCliente(id, this.Cliente ).subscribe(data=>{
      // console.log(data)
      if(data)
      Swal.fire({
        title: 'Rol Cambiado', 
        icon: 'success',
        confirmButtonText: `OK!` , 
      })
      this.detalle();
    })
    })
  }

}
