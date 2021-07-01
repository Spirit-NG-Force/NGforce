import { Component } from '@angular/core';
import { WebsocketService } from 'app/service/websocket.service';

@Component({
  selector: 'chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[WebsocketService]
})
export class ChatComponent {
  conversation = null;


  onConversationSelected(conversation){
    this.conversation = conversation;
  }
}
