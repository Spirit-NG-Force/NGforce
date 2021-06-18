import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { JobofferService } from "app/service/joboffer.service";
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
 token : string=localStorage.getItem("email1")
  constructor(public router: Router,private jobservice :JobofferService) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.jobservice.decode(this.token).subscribe((id)=>{
     


    })
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
