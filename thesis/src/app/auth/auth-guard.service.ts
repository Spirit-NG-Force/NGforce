import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
    let token = localStorage.getItem('userid');
    if (token) {
    
      
      return true;
    }
    // this.router.navigate(['profil'])
    this.router.navigate(['views/login'])
    return false;
  }
}