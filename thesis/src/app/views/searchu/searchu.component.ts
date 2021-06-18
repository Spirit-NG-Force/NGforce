import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'angular2-multiselect-dropdown/lib/multiselect.service';
import * as Rellax from 'rellax';
import {JobofferService} from '../../service/joboffer.service'
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
    data : Date = new Date();
    datas : any
    alldatas : any
    TypeOfContract : string;
    Salary : string;
    YearsOfExperience : string
    OfferTitle : string
    constructor(private jobservice :JobofferService) { }

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
        this.datas=post})
    }
    click(event){
        console.log(event.target.innerText)
        this.TypeOfContract=event.target.innerText
    }
    click1(event){
        console.log(event.target.innerText)
        this.Salary=event.target.innerText
      
    }
    click2(event){
        console.log(event.target.innerText)
        this.YearsOfExperience=event.target.innerText
    }
    onSubmit(){
        console.log(this.datas)
        console.log(this.OfferTitle)
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
          console.log(result)
         }
        }
        if(result){
           this.datas=result 
        }
        }
        else if(!this.OfferTitle){
         this.datas=this.datas
        }
        })
       
        

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