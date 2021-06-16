import { Component, OnInit } from '@angular/core';
import { JobofferService } from 'app/service/joboffer.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    email : string;
    password : string;
    
    
    constructor(private jobservice :JobofferService, public router: Router) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    onSubmit(){
        const obj={
         
          email : this.email,
          password : this.password ,
        
      }
        this.jobservice.getUser(obj).subscribe((users)=>{
          if(users.token!== 'incorrect password' && users.token!== `email don't exist`){
            this.router.navigate(['views/profil'])
            localStorage.setItem("email",users.token)

           
          }
         
        })
       
      }
   

}
