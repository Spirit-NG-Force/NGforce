import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app.routing';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat.component';



@NgModule({
  declarations: [SidebarComponent, MessagesComponent, ChatComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
   
  ]

})

export class ChatModule { }
