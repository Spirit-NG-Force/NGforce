import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebsocketService } from 'app/service/websocket.service';
import { JobofferService } from 'app/service/joboffer.service';
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
  constructor(private websocket :WebsocketService , private jobof :JobofferService ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.conversation._id)
  }

  text:string ;
  sender:string;
  company_id:string;
  user_id:string;
  token: string = localStorage.getItem("email");

  submitMessage(event) {

   
    !localStorage.getItem("email") ? "Company" : "User"

    // let value = event.target.value.trim();
    // this.message = '';
    // if (value.length < 1) return false;
    //this.conversation.latestMessage = value;
    // this.conversation.messages.unshift({
    //   id: 1,
    //   body: value,
    //   time: '10:21',
    //   me: true,
    // });
    const msg={
      text:this.text ,
      sender:this.sender,
      company_id:this.company_id,
      user_id:this.user_id
    }
    this.websocket.postMessages(msg).subscribe((msg)=>{

    })
  }

  emojiClicked(event) {
    this.message += event.emoji.native;
  }
}
