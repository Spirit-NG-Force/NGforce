import { Component, OnInit } from '@angular/core';
import {JobofferService} from '../../service/joboffer.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup-u.component.html',
  styleUrls: ['./signup-u.component.css']
})
export class SignupComponent implements OnInit {
  focus;
  focus1;
  focus2;
  name : string;
  lastname : string;
  email: string;
  password : string;
  status : string= "";

    data : Date = new Date();

    constructor(private jobservice :JobofferService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('signup-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-absolute');
        navbar.classList.remove('fixed-top');

    }
    onSubmit(){
      const obj={
        name : this.name,
        lastname : this.lastname,
        email : this.email,
        password : this.password ,
      status : "user" 
    }
      this.jobservice.postUser(obj).subscribe((users)=>{
        console.log(users)
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
