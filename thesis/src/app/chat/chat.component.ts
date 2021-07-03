import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'app/service/websocket.service';

import io from 'socket.io-client'
@Component({
  selector: 'chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[WebsocketService]
})
export class ChatComponent implements  OnInit{
  conversation = null;
  socket : any
  bolean : boolean=true
  constructor(public router : Router){this.socket = io('http://localhost:4001') }
ngOnInit() : void{
  if(!localStorage.getItem("userid") && !localStorage.getItem("companyid")){
    this.router.navigate(['views/login'])
    // this.bolean=false
  }
}
  onConversationSelected(conversation){
   
    this.conversation = conversation;
  }
}
