import { ProductoService } from './../../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { FreshcampoService } from 'src/app/services/freshcampo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rol:any=0;
  cambiar:boolean=false;
  autentificado:boolean=true; 
  ActivatedRoute: any;
  constructor(
    public router: Router,
    public auth: AuthService,
    public fs:FreshcampoService,
    public Pro:ProductoService) { }
    
    loginWithRedirect(){
      this.auth.loginWithRedirect();
    }

    navegar(ruta:any){

      this.auth.isAuthenticated$.subscribe((aut: any) => {
        if(aut) { 
          this.router.navigate([`/${ruta}`]) 
        }else {
          this.loginWithRedirect() 
        }
      })
    }
    camb(){
      this.cambiar =!this.cambiar

    }


    
  ngOnInit(): void { 
  }


}