import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import { JobofferService } from "app/service/joboffer.service"
import { followsService } from "app/service/follows.service";
import {Router} from '@angular/router'
import io from 'socket.io-client'
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
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
  dropdownList = [
    { id: 1, itemName: "CDI" },
    { id: 2, itemName: "CDD" },
    { id: 3, itemName: "Traineeship" },
    { id: 4, itemName: "Freelance" },
    { id: 5, itemName: "Alernation" },
    
    
  ];
  selectedItems = [];
  dropdownList1 = [
    { id: 1, itemName: "Less than 1 year" },
    { id: 2, itemName: "Between 1 and 2 years" },
    { id: 3, itemName: "Between 2 and 5 years" },
    { id: 4, itemName: "More than 5 years" },
  
  ];
  selectedItems1 = [];
  dropdownList2= [
    { id: 1, itemName: "Less than 600DT " },
    { id: 2, itemName: "Between 600DT and 1200DT" },
    { id: 3, itemName: "Between 1200DT and 1500DT" },
    { id: 4, itemName: "More than 1500DT" },
  
  ];
  selectedItems2 = [];
  token : string = localStorage.getItem("companyid")
  companyName:string ; 
  offerTitle:string ; 
  offerDescription:string ; 
  typeOfContract:string ; 
  salary:string ; 
  yearsOfExperience:string ; 
  socket : any;


  constructor(public router: Router,private jobservice :JobofferService,private followservice :followsService) {this.socket = io('http://localhost:4001')}
  click(event){
    console.log(event.itemName)
    this.typeOfContract=event.itemName
  }

  click1(event){
    console.log(event.itemName)
    this.salary=event.itemName
  }

  click2(event){
    console.log(event.itemName)
    this.yearsOfExperience=event.itemName
  }
  onSubmit(){
 
    this.jobservice.decode(this.token).subscribe((id)=>{
      
      const obj={
       company: id.companyid ,
       companyName : this.companyName,
       offerTitle: this.offerTitle,
       offerDescription: this.offerDescription,
       typeOfContract: this.typeOfContract,
       salary: this.salary,
       yearsOfExperience: this.yearsOfExperience,
      }
      this.jobservice.createpostjob(obj).subscribe((create)=>{
        this.router.navigate(['views/home'])
        console.log(create)
        })
        const obj1= {message : this.companyName+" has posted a job for "+this.offerTitle,
      sender : id.companyid }
    this.followservice.addnotification(obj1).subscribe((add)=>console.log(add))
    
     
    
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
