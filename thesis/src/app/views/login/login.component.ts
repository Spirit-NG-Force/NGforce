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
    bolean : boolean=false;
    
    constructor(private jobservice :JobofferService, public router: Router) { }

    ngOnInit() { 
        this.bolean=false
        if (localStorage.getItem("email")) {
            this.router.navigate(["views/profil"]);
          }
        if (localStorage.getItem("email1")) {
            this.router.navigate(["views/home"]);
          }
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
             this.bolean=true
           
          }
          else{
              this.email=""
              this.password=""
          }
         
        })
        if(this.bolean===false){
            this.jobservice.getCompany(obj).subscribe((users)=>{
                if(users.token!== 'incorrect password' && users.token!== `email don't exist`){
                  this.router.navigate(['views/home'])
                  localStorage.setItem("email1",users.token)
                   this.bolean=true
                 
                }
                else{
                    this.email=""
                    this.password=""
                }
               
              })
        }
       
      }
   

}
