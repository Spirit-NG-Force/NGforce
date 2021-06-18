import { Component, OnInit } from '@angular/core';

import {JobofferService} from '../../service/joboffer.service'
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

  name:string ; 
  adress:string; 
  phonenumber:number;
  email:string;
  password:string;
  msg : string
    data : Date = new Date();

    constructor(public router: Router,private jobservice :JobofferService) { }

    ngOnInit() {
      if (localStorage.getItem("email")) {
        this.router.navigate(["views/profil"]);
      }
      else if (localStorage.getItem("email1")) {
        this.router.navigate(["views/home"]);
      }
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-absolute');
        navbar.classList.remove('fixed-top');
       

    }
    onSubmit(){
      const obj={
        name : this.name ,
        adress: this.adress , 
        phonenumber : this.phonenumber ,
        email : this.email ,
        password : this.password ,
        website : "" ,
      }
      this.jobservice.postCompany(obj).subscribe((company)=>{
        if(company.msg === "right"){
          this.router.navigate(['views/login'])
         }
      });
      
        
        this.name=""
        this.email=""
        this.password=""
        this.adress=""
        this.phonenumber=null
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-absolute');
        navbar.classList.add('fixed-top');
      }

}

