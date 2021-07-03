import { Component, OnInit } from "@angular/core";
import { JobofferService } from "../../service/joboffer.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup-u.component.html",
  styleUrls: ["./signup-u.component.css"],
})
export class SignupComponent implements OnInit {
  focus;
  focus1;
  focus2;
  data: Date = new Date();
  name: string;
  lastname: string;
  email: string;
  password: string;
  status: string = "";
  msg : string;

  

  constructor(private jobservice: JobofferService, public router: Router) {}

  ngOnInit() {
  
    if (localStorage.getItem("userid")) {
      this.router.navigate(["views/profil"]);
    }
    else if (localStorage.getItem("companyid")) {
      this.router.navigate(["views/home"]);
    }
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("signup-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-absolute");
    navbar.classList.remove("fixed-top");
  }
  onSubmit(){
    console.log("hello")
    const obj = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      status: "user",
    };
    this.jobservice.postUser(obj).subscribe((users) => {
    if(users.msg === "right"){
      this.router.navigate(['views/login'])
     }
    });
    
    
    this.name=""
    this.lastname=""
    this.email=""
    this.password=""
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("signup-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-absolute");
    navbar.classList.add("fixed-top");
  }
}
