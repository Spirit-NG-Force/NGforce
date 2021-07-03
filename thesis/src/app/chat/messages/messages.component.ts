import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebsocketService } from 'app/service/websocket.service';
import { JobofferService } from 'app/service/joboffer.service';
import io from "socket.io-client"
// import {moment} from "moment"
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @Input() conversation;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible;
  message = '';
  socket : any;
 
  constructor(private websocket :WebsocketService , private jobof :JobofferService ) {this.socket = io('http://localhost:4001') }

  ngOnInit(): void {
 
   if(!localStorage.getItem("userid")){
     this.token=localStorage.getItem("companyid")
   }
   this.jobof.decode(this.token).subscribe((id)=>{
     let idjob=id.userid
    if(!id.userid){
      idjob=id.companyid
    }
    this.socket.on("message",(msg)=>{
      if(idjob === msg.company_id || idjob ===msg.user_id){
        this.conversation.messages.unshift(msg)
        console.log(this.conversation.messages)
      }
    
    })
   })
   
  }

  ngOnChanges() {
    
  }

  text:string ;
  sender:string;
  company_id:string;
  user_id:string;
  token: string = localStorage.getItem("userid");

  submitMessage(event) {
console.log(this.conversation)
    this.jobof.decode(this.token).subscribe((id) => {
      
    if(!localStorage.getItem("userid")){
      this.sender="Company";
       this.company_id = id.companyid ;
       this.user_id = this.conversation._id._id;
    }
    else{
      this.sender="User" ;
       this.user_id = id.userid;
       this.company_id = this.conversation._id._id;
    }
    let value = event.target.value.trim();
   
    const msg={
      text:value ,
      sender:this.sender,
      company_id:this.company_id,
      user_id:this.user_id
      
    }
    
    this.websocket.postMessages(msg).subscribe((msg)=>{
      console.log(msg)
      
    })
   event.target.value=""
    })
    
   
  }

  emojiClicked(event) {
    this.message += event.emoji.native;
  }
}
