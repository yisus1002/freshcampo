import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

     return this.auth.isAuthenticated$.pipe(
        tap( loggedIn =>{
          if(loggedIn){
            console.log('Acceso permitido')
          }else{
            
            console.log('No autorizado')
            this.router.navigate(['/home']);
          }
        })
      )
    return true;
  }
  
}
