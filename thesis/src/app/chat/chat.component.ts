import { Component,OnInit } from '@angular/core';
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
  constructor(){this.socket = io('http://localhost:4001') }
ngOnInit() : void{
  if(!localStorage.getItem("email")){
    this.bolean=false
  }
}
  onConversationSelected(conversation){
   
    this.conversation = conversation;
  }
}
