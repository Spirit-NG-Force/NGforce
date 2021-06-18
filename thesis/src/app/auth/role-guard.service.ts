import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public router: Router) { }
  canActivate(): boolean {
    let token = localStorage.getItem('email1');
    if (token) {
    
      
      return true;
    }
    // this.router.navigate(['views/profil'])
    this.router.navigate(['views/login'])
    return false;
  }
}
