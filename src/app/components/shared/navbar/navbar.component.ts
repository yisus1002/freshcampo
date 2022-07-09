import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { FreshcampoService } from 'src/app/services/freshcampo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rol:any=0;

  constructor(
    private router: Router,
    public auth: AuthService,
    public fs:FreshcampoService) {
     }
     loginWithRedirect(){
      this.auth.loginWithRedirect();
    } 

  ngOnInit(): void { 
    // this.fs.rol()
    // this.vericar_rol();
  }
  // vericar_rol(){
  //   this.fs.getCliente_Detalle(this.fs.id).subscribe((data:any)=>{
  //     this.rol=data['rol']
  //     console.log(this.rol)
  //   })
  // }

}
