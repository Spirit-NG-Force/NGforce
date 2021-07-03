import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebsocketService } from 'app/service/websocket.service';
import { JobofferService } from 'app/service/joboffer.service';
import * as moment from 'moment';
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
  constructor(private websocket :WebsocketService , private jobof :JobofferService ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    
  }

  text:string ;
  sender:string;
  company_id:string;
  user_id:string;
  

  token: string = localStorage.getItem("email");

  submitMessage(event) {

    this.jobof.decode(this.token).subscribe((id) => {
      
    if(!localStorage.getItem("email")){
      this.sender="Company" ;
       this.company_id = id.email1 ;
       this.user_id = this.conversation._id._id;
    }
    else{
      this.sender="User" ;
       this.user_id = id.email;
       this.company_id = this.conversation._id._id;
    }
    let value = event.target.value.trim();
   
    const msg={
      text:value ,
      sender:this.sender,
      company_id:this.company_id,
      user_id:this.user_id
      
    }
    this.conversation.messages.unshift(msg)
    this.websocket.postMessages(msg).subscribe((msg)=>{
      console.log(msg)
    })
    })
   
  }

  emojiClicked(event) {
    this.message += event.emoji.native;
  }
}
