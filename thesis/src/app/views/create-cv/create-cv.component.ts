import { Component, OnInit } from "@angular/core";
import { JobofferService } from "app/service/joboffer.service";
import {Router} from '@angular/router'
import * as Rellax from "rellax";

@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.css"],
})
export class CreateCvComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
    },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
    },
  ];
  data: Date = new Date();
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  select : string;
  dropdownList = [
    { id: 1, itemName: "Post Baccalauréat" },
    { id: 2, itemName: "Baccalauréat" },
    { id: 3, itemName: "Baccalauréat" },
    { id: 4, itemName: "Baccalauréat+3" },
    { id: 5, itemName: "Baccalauréat+5" },
    { id: 6, itemName: " More then 5" },
    
  ];

  selectedItems  =  [];
  
  
  dropdownList1 = [
    { id: 1, itemName: "Less than 1 year" },
    { id: 2, itemName: "Between 1 and 2 years" },
    { id: 3, itemName: "between 2 and 5 years" },
    { id: 4, itemName: "More than 5 years" },
  
  ];
  selectedItems1 = [];

  selectedItems2 = [];

  dropdownList2 = [
    { id: 1, itemName: "Software Solution" },
    { id: 2, itemName: "Design" },
    { id: 3, itemName: "Marketing" },
   
  ];
  token : string=localStorage.getItem("email")
  name: string;
  lastName: string;
  age: number;
  email: string;
  adress: string;
  descProfil: string;
  ProfExp: string;
  studylevel: string;
  expyear :string;
  field: string;
  phone:number;
  
  email1 : string
  name1 :string;
  lastname1 : string;
  password1 : string;
  

  constructor(public router: Router,private jobservice :JobofferService) {}
  click(event){
    
    console.log(event.itemName)
    this.field=event.itemName
  }
  click1(event){
    
    console.log(event.itemName)
    this.studylevel=event.itemName
  }
  click2(event){
    
    console.log(event.itemName)
    this.expyear=event.itemName
  }
onSubmit(){
 
  this.jobservice.decode(this.token).subscribe((id)=>{
    console.log(id.email)
    const obj={
     id : id.email,
     name : this.name,
     lastname : this.lastName,
     age: this.age,
     email: this.email ,
     adress: this.adress,
     descProfil: this.descProfil,
     ProfExp: this.ProfExp,
     studylevel: this.studylevel,
     expyear :this.expyear,
     field: this.field,
     phone:this.phone
    }
   this.jobservice.updatecv(id.email,obj).subscribe((update)=>{
   if(!update){
    this.jobservice.createcv(obj).subscribe((create)=>{
      this.router.navigate(['views/profil'])
      console.log(create)
      })
  
   }
   })
  })
   
}
onSubmit1(){
  const obj={
    name : this.name1,
    lastname: this.lastname1,
    email : this.email1,
    password : this.password1
  }
  if(!this.name1 ){
    delete obj.name
  }
  if(!this.lastname1 ){
    delete obj.lastname
  }
  if(!this.email1){
    delete obj.email
  }
  if(!this.password1){
    delete obj.password
  }
  this.jobservice.decode(this.token).subscribe((id)=>{
this.jobservice.updatuser(id.email,obj).subscribe((upd)=>
console.log(upd)
)
  })
}
  ngOnInit() {
    var rellaxHeader = new Rellax(".rellax-header");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("contact-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
   
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("contact-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
    
  }
}
