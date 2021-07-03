import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'angular2-multiselect-dropdown/lib/multiselect.service';
import * as Rellax from 'rellax';
import {JobofferService} from '../../service/joboffer.service'
import { JobofferService1 } from 'app/service/joboffer1.service';

@Component({
  selector: 'app-searchu',
  templateUrl: './searchu.component.html',
  styleUrls: ['./searchu.component.css'],
})
export class  SearchuComponent implements OnInit, OnDestroy {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};
    focus;
    focus1;
    iduser : string;
    token : string=localStorage.getItem("email");
    data : Date = new Date();
    follows : any=[];
    datas : any
    alldatas : any
    TypeOfContract : string;
    Salary : string;
    YearsOfExperience : string
    OfferTitle : string
    constructor(private jobservice :JobofferService,private jobservice1 :JobofferService1) { }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');
  

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.dropdownList = [
                              {"id":1,"itemName":"I'm a Designer"},
                              {"id":2,"itemName":"I'm a Developer"},
                              {"id":3,"itemName":"I'm a Hero"}
                            ];
        this.selectedItems = [
            {"id":2,"itemName":"I'm a Developer"}
        ];
        this.dropdownSettings = {
                                  singleSelection: true,
                                  text:"Speciality",
                                  
                                  classes:"",
                                  lazyLoading: true,
                                  maxHeight: 100
                                };

     this.jobservice.getallpostjob().subscribe((post)=>{
        this.alldatas=post  
        this.datas=post
        for(let i =0 ; i<this.datas.length;i++){
            this.jobservice1.getfollow(this.iduser,this.datas[i].id).subscribe((get)=>{
                if(get.length===0){
                    this.follows.push(false)
                }
                else{
                    this.follows.push(true)
                }
               
            })
            
        }
       
        
    })
   
    this.jobservice.decode(this.token).subscribe((id)=>{
        this.iduser=id.email
 
 })     
 
    
    }
    
    click(event){
       
        this.TypeOfContract=event.target.innerText
    }
    click1(event){
       
        this.Salary=event.target.innerText
      
    }
    click2(event){
       
        this.YearsOfExperience=event.target.innerText
    }
    onSubmit(){
         const obj={
         TypeOfContract:this.TypeOfContract,
         Salary:this.Salary,
         YearsOfExperience :this.YearsOfExperience,
      
        }
      if(!this.TypeOfContract){
          delete obj.TypeOfContract
      }
      if(!this.Salary){
        delete obj.Salary
    }
    if(!this.YearsOfExperience){
        delete obj.YearsOfExperience
    }
    
        this.jobservice.search(obj).subscribe((search)=>{
        if(search){
            this.datas=search
        }
        else if(!search){
            this.datas=this.alldatas
        }
        if(this.OfferTitle){
            let result=[]
        for(let i=0;i<this.datas.length;i++){
            let dat=this.datas[i].OfferTitle
         if(dat.indexOf(this.OfferTitle)===0){
          result.push(this.datas[i])
 
         }
        }
        if(result){
           this.datas=result 
        }
        }
        
        })
       
   

    }
    follow(data){
      for(let i=0;i<this.datas.length;i++){
       if(this.datas[i].id===data.id){
           this.follows[i]=!this.follows[i]
       }
      }
console.log(this.iduser)
const obj={iduser:this.iduser,idcompany : data.id}
this.jobservice1.addfollow(obj).subscribe((add)=>console.log(add))

    }
    unfollow(data){
        for(let i=0;i<this.datas.length;i++){
            if(this.datas[i].id===data.id){
                this.follows[i]=!this.follows[i]
            }
           }
        this.jobservice1.deletefollow(this.iduser,data.id).subscribe((del)=>console.log(del))
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }

    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('about-us');
        var navbar = document.getElementsByTagName('nav')[0];
        body.classList.remove('navbar-transparent');
    }
}