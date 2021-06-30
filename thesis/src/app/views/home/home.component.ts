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
  
  amount: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  orderId: string;
  email: string;
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
  CompanyName:string ; 
  OfferTitle:string ; 
  OfferDescription:string ; 
  TypeOfContract:string ; 
  Salary:string ; 
  YearsOfExperience:string ; 







 
  
 token : string=localStorage.getItem("email1")
 datas : any=["NO POST"]
  constructor(public router: Router,private jobservice :JobofferService) { }
  click(event){
    console.log(event.itemName)
    this.TypeOfContract=event.itemName
  }

  click1(event){
    console.log(event.itemName)
    this.Salary=event.itemName
  }

  click2(event){
    console.log(event.itemName)
    this.YearsOfExperience=event.itemName
  }
  onSubmit(data){
    console.log(data)
    this.jobservice.decode(this.token).subscribe((id)=>{
      console.log(id.email1)
      const obj={
       id : id.email1,
       CompanyName: this.CompanyName,
       OfferTitle: this.OfferTitle,
       OfferDescription: this.OfferDescription,
       TypeOfContract: this.TypeOfContract,
       Salary: this.Salary,
       YearsOfExperience: this.YearsOfExperience,
      }
      this.jobservice.updatepostjob(data._id,obj).subscribe((create)=>{
        this.router.navigate(['views/home'])
        for(var i=0;i<this.datas.length;i++){
          if(this.datas[i]._id===create._id){
            this.datas[i]=create
          }
        }
        console.log(create)
        })
    
     
       
    
  })
  }
  delete(data){
   
this.jobservice.deletepostjob(data._id).subscribe((del)=>

console.log(del)

)
for(let i=0;i<this.datas.length;i++){
if(this.datas[i]._id===data._id){
this.datas.splice(i,1)
}
}



    
  }
  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.jobservice.decode(this.token).subscribe((id)=>{
      console.log(id)
     this.jobservice.getpostjobs(id.email1).subscribe((data)=>{
     
     this.datas=data
     console.log(data)
    })


    })
  }


  onSubmitPayment() {
    const obj = {
      receiverWallet: "60d5d753e1add7620c68faf9",
      amount: 100,
      selectedPaymentMethod: "gateway",
      token: "TND",
      firstName: "Heni",
      lastName: "Mezrani",
      phoneNumber: "55555555",
      email: "heni@mezrani.com",
      orderId: "AC2l",
      successUrl: "http://localhost:4200/#/views/successPayment?user=heni&anyinfo=myinfo",
      failUrl: "http://localhost:4200/#/views/failPayment?user=heni&anyinfo=myinfo",
    };
    this.jobservice.postPayment(obj).subscribe((payment) => {
      // this.router.navigate(payment);
      window.location.href = payment.payUrl;
    });

    this.amount = null;
    this.firstName = "";
    this.lastName = "";
    this.phoneNumber = "";
    this.email = "";
    this.orderId = "";
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
