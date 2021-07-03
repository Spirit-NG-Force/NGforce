import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'angular2-multiselect-dropdown/lib/multiselect.service';
import * as Rellax from 'rellax';
import {JobofferService} from '../../service/joboffer.service'
import { JobofferService1 } from 'app/service/joboffer1.service';
import { WebsocketService } from 'app/service/websocket.service';
@Component({
  selector: 'app-searchu',
  templateUrl: './searchu.component.html',
  styleUrls: ['./searchu.component.css'],
  providers:[WebsocketService]
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
    token : string=localStorage.getItem("userid");
    data : Date = new Date();
    follows : any=[];
    datas : any
    alldatas : any
    typeOfContract : string;
    salary : string;
    yearsOfExperience : string
    offerTitle : string
    constructor(private jobservice :JobofferService,private jobservice1 :JobofferService1,private websocket :WebsocketService) { }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');
      // var rellaxText = new Rellax('.rellax-text');

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
                                  // selectAllText:'Select All',
                                  // unSelectAllText:'UnSelect All',
                                  // enableSearchFilter: true,
                                  classes:"",
                                  lazyLoading: true,
                                  maxHeight: 100
                                };

     this.jobservice.getallpostjob().subscribe((post)=>{
        this.alldatas=post  
        this.datas=post
        for(let i =0 ; i<this.datas.length;i++){
            this.jobservice1.getfollow(this.iduser,this.datas[i].company).subscribe((get)=>{
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
        this.iduser=id.userid
 
 })     
 
    
    }
    
    click(event){
        console.log(event.target.innerText)
        this.typeOfContract=event.target.innerText
    }
    click1(event){
        console.log(event.target.innerText)
        this.salary=event.target.innerText
      
    }
    click2(event){
        console.log(event.target.innerText)
        this.yearsOfExperience=event.target.innerText
    }
    onSubmit(){
        const obj={
         typeOfContract:this.typeOfContract,
         salary:this.salary,
         yearsOfExperience :this.yearsOfExperience,
      
        }
      if(!this.typeOfContract){
          delete obj.typeOfContract
      }
      if(!this.salary){
        delete obj.salary
    }
    if(!this.yearsOfExperience){
        delete obj.yearsOfExperience
    }
    
        this.jobservice.search(obj).subscribe((search)=>{
        if(search){
            this.datas=search
        }
        else if(!search){
            this.datas=this.alldatas
        }
        if(this.offerTitle){
            let result=[]
        for(let i=0;i<this.datas.length;i++){
            let dat=this.datas[i].offerTitle
         if(dat.indexOf(this.offerTitle)===0){
          result.push(this.datas[i])
          console.log(result)
         }
        }
        if(result){
           this.datas=result 
        }

        }
        
        })
       
   

    }
    apply(data){
        this.jobservice.decode(this.token).subscribe((id)=>{
            const msg={
                text:"i want to apply for "+data.OfferTitle ,
                sender:"User",
                company_id:data.company,
                user_id:id.userid
              }
              
              this.websocket.postMessages(msg).subscribe((msg)=>{
                console.log(msg)
                
              })
           }) 

    }
    follow(data){
      for(let i=0;i<this.datas.length;i++){
       if(this.datas[i].company===data.company){
           this.follows[i]=!this.follows[i]
       }
      }
console.log(this.iduser)
const obj={iduser:this.iduser , idcompany : data.company}
this.jobservice1.addfollow(obj).subscribe((add)=>console.log(add))

    }
    unfollow(data){
        for(let i=0;i<this.datas.length;i++){
            if(this.datas[i].company===data.company){
                this.follows[i]=!this.follows[i]
            }
           }
        this.jobservice1.deletefollow(this.iduser, data.company).subscribe((del)=>console.log(del))
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