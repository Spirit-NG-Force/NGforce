import { Component, OnInit } from '@angular/core';
import {JobofferService} from '../../services/joboffer.service'

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

    data : Date = new Date();

    constructor(private taskservice :JobofferService) { }

    ngOnInit() {
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
        phonenumber : this.password ,
        email : this.email ,
        password : this.password 
      }
      this.taskservice.postCompany(obj).subscribe((company)=>{
        console.log(company)
      })
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-absolute');
        navbar.classList.add('fixed-top');
      }

}

