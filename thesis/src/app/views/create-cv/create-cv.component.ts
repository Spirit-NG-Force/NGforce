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

  data: Date = new Date();
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  select : string;
  dropdownList = [
    { id: 1, itemName: "Post Baccalauréat" },
    { id: 2, itemName: "baccalauréat" },
    { id: 3, itemName: "baccalauréat+3" },
    { id: 4, itemName: "baccalauréat+5" },
    { id: 5, itemName: "More then 5" },
    
  ];

  selectedItems  =  [];
  
  
  dropdownList1 = [
    { id: 1, itemName: "Less than 1 year" },
    { id: 2, itemName: "Between 1 and 2 years" },
    { id: 3, itemName: "Between 2 and 5 years" },
    { id: 4, itemName: "More than 5 years" },
  
  ];
  selectedItems1 = [];

  selectedItems2 = [];

  dropdownList2 = [
    { id: 1, itemName: "Software Solution" },
    { id: 2, itemName: "Design" },
    { id: 3, itemName: "Marketing" },
   
  ];
  token : string=localStorage.getItem("userid")
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
  img : string;
  fileToUpload: File | null = null;

  email1 : string
  name1 :string;
  lastname1 : string;
  password1 : string;
  

  constructor(public router: Router,private jobservice :JobofferService) {}
  click(event){
    
    
    this.field=event.itemName
  }
  click1(event){
    
    
    this.studylevel=event.itemName
  }
  click2(event){
    
    
    this.expyear=event.itemName
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  
  }

  onSubmit(){
  this.jobservice.decode(this.token).subscribe(id=>{

    var obj={
      id : id.userid,
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
      phone:this.phone, 
      img:"https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
     }
     if(this.fileToUpload) {
     
    const file = new FormData() 
    file.append("file",this.fileToUpload)
    
    this.jobservice.postimg(file).subscribe(data => {
      obj.img=data.url 
      
     
    this.jobservice.updatecv(id.userid,obj).subscribe((update)=>{
    if(!update){
      this.jobservice.createcv(obj).subscribe((create)=>{
        this.router.navigate(['views/profil'])
        
        return 
        })
    }
    this.router.navigate(['views/profil'])
    return
    })
    })
  }
    else {
         this.jobservice.updatecv(id.userid,obj).subscribe((update)=>{
      if(!update){
        this.jobservice.createcv(obj).subscribe((create)=>{
          this.router.navigate(['views/profil'])
         
          })
      }
      this.router.navigate(['views/profil'])
      })
    }
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
this.jobservice.updatuser(id.userid,obj).subscribe((upd)=>
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
