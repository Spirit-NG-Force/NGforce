import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import {JobofferService} from '../../service/joboffer.service'
@Component({
  selector: 'app-searchc',
  templateUrl: './searchc.component.html',
  styleUrls: ['./searchc.component.css'],
})
export class  SearchcComponent implements OnInit, OnDestroy {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};
    focus;
    focus1;
    data : Date = new Date();
    alldatas : any;
    datas : any;
    descProfil : string;
    field : string ;
    expyear : string;
    studylevel : string;


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

       this.jobservice.getallcv().subscribe((post)=>{
       this.alldatas=post  
       this.datas=post})


    }
    click(event){
        console.log(event.target.innerText)
        this.field=event.target.innerText
    }
    click1(event){
        console.log(event.target.innerText)
        this.studylevel=event.target.innerText
      
    }
    click2(event){
        console.log(event.target.innerText)
        this.expyear=event.target.innerText
    }

    onSubmit(){
        console.log(this.datas)
        console.log(this.descProfil)
        const obj={
         descProfil:this.descProfil,
         field:this.field,
         expyear :this.expyear,
         studylevel:this.studylevel
        }
        if(!this.descProfil){
            delete obj.descProfil
        }
        if(!this.field){
        delete obj.field
        }
        if(!this.expyear){
            delete obj.expyear
        }
    
        this.jobservice.searchcv(obj).subscribe((search)=>{
        if(search){
            this.datas=search
        }
        else if(!search){
            this.datas=this.alldatas
        }
        if(this.descProfil){
            let result=[]
        for(let i=0;i<this.datas.length;i++){
            let dat=this.datas[i].descProfil
         if(dat.indexOf(this.descProfil)===0){
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