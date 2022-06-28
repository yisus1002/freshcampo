import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any={};
  Habilitar:boolean=true;

  constructor(public auth: AuthService,
              private router: Router)    { this.verUsuario()}

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  } 
  async verUsuario(){ 
  this.auth.getUser().subscribe(usuario =>{
    this.usuario=usuario;
    console.log(usuario)
  });
  }
  volver(){
    this.router.navigate(['/home'])
    this.Habilitar=true;
  }
  habilitar(){
    this.Habilitar=true;
  }

}
