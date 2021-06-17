import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  focus;
  focus1;
  focus2;


    data : Date = new Date();

    constructor(public router: Router) { }

    ngOnInit() {
      if(localStorage.getItem("email")){
        this.router.navigate(['views/profil'])
        }
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-absolute');
        navbar.classList.remove('fixed-top');
       

    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-absolute');
        navbar.classList.add('fixed-top');
      }

}

