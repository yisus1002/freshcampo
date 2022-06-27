import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  usuario: any={};


  constructor(
    private router: Router,
    public auth: AuthService
  ) { this.verUsuario()}

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }
  // *ngIf=" auth.user$ |async as user"
  async verUsuario(){ 
  this.auth.getUser().subscribe(usuario =>{
    this.usuario=usuario;
    console.log(usuario)
  });
  }

}