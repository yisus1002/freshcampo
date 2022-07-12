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
  autentificado:boolean=true; 
  ActivatedRoute: any;
  constructor(
    public router: Router,
    public auth: AuthService,
    public fs:FreshcampoService) { }
    
    
    
    
    loginWithRedirect(){
      this.auth.loginWithRedirect();
    }
    // this.router.navigate([`/${ruta}`])

    navegar(ruta:any){

      this.auth.isAuthenticated$.subscribe((aut: any) => {
        if(aut) { 
          this.router.navigate([`/${ruta}`]) 
        }else {
          this.loginWithRedirect() 
        }
      })
    }


    
  ngOnInit(): void { 
  }


}