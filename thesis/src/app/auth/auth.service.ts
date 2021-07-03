import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
    let token = localStorage.getItem('userid');
    let token1=localStorage.getItem('companyid')
    if (token || token1) {
    
      
      return true;
    }
    // this.router.navigate(['profil'])
    this.router.navigate(['views/login'])
    return false;
  }
}