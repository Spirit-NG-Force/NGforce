import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
    let token = localStorage.getItem('email');
    if (token) {
    
      
      return true;
    }
    // this.router.navigate(['profil'])
    this.router.navigate(['views/login'])
    return false;
  }
}