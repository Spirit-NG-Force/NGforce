import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor(public router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("userid")){
      this.router.navigate(['views/profil'])
      }
      else if(localStorage.getItem("companyid")){
        this.router.navigate(['views/home'])
      }
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
