import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import {JobofferService} from '../../service/joboffer.service'
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    data : Date = new Date();
    focus;
    focus1;
    cv : any={id : "none",
      name: "none",
      lastName:"none",
      age: "none",
      email: "none",
      adress: "none",
      descProfil: "none",
      ProfExp: "none",
      studylevel: "none",
      expyear :"none ",
      field: "none",
      phone:"none",
      img:""
    };
    datas : any;
    token : string=localStorage.getItem("email")
    id : string="";
    constructor(private jobservice :JobofferService) { }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');
    
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.jobservice.decode(this.token).subscribe((id)=>{
        this.id=id.email
        console.log(this.id)
        this.jobservice.iduser(id.email).subscribe((datas)=>{
          this.datas=datas
          console.log( this.datas)
          })
          this.jobservice.getonecv(id.email).subscribe((cv)=>{
            if(!cv){
              this.cv={id : "none",
              name: "none",
              lastName:"none",
              age: "none",
              email: "none",
              adress: "none",
              descProfil: "none",
              ProfExp: "none",
              studylevel: "none",
              expyear :"none ",
              field: "none",
              phone:"none",
              img:""
            };
            }
            else{
            this.cv=cv
            console.log(cv)
            }
        })

          
        })
       
        
       
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
