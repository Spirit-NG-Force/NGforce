import { Component, OnInit } from '@angular/core';
import {JobofferService1} from 'app/service/joboffer1.service'
import { JobofferService } from 'app/service/joboffer.service'
import { Router } from '@angular/router'
import io from 'socket.io-client';
@Component({
  selector: 'app-notificationuser',
  templateUrl: './notificationuser.component.html',
  styleUrls: ['./notificationuser.component.css']
})
export class NotificationuserComponent implements OnInit {
 
  constructor(private jobservice1 : JobofferService1 ,private jobservice : JobofferService) {  this.socket = io('http://localhost:4001')   }
  socket: any;
  token : string=localStorage.getItem("email")
messages : any=[]

followss : any;

  ngOnInit(): void {
    
   
this.jobservice.decode(this.token).subscribe((id)=>{
    this.jobservice1.searchfollow(id.email).subscribe((search)=>{
      console.log(search)
    for(let i = 0 ; i<search.length;i++){
      console.log(search[i].idcompany)
      this.jobservice1.findnotification(search[i].idcompany).subscribe((not)=>{
       
      
       this.messages=not
        console.log(this.messages)
      })
    }
    
    })
    this.socket.on('connection',(msg)=>console.log(msg))
  
    this.jobservice1.gettallfollow().subscribe((follows)=>{
    
    this.socket.on("notification" , (obj)=>{ 
    for(let i =0;i<follows.length;i++){
      if(follows[i].iduser===id.email && follows[i].idcompany===obj.sender){
        this.messages.push(obj)
      }
    }
    })
  })
    
})




}

}
