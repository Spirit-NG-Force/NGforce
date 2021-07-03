import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { JobofferService } from "app/service/joboffer.service";
import { WebsocketService } from "app/service/websocket.service";
import * as moment from 'moment';
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
  
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  ready: boolean = false;
  today: string = moment().format('LT');
  conversations = [
    // {
    //     name: 'Rock',
    //     time: '8:21',
    //     latestMessage: 'Good Morning!',
    //     latestMessageRead: true,
    //     messages: [
    //       { id: 1, body: 'Hello world', time: '8:21', me: true },
    //       { id: 2, body: 'How are you?', time: '8:21', me: false },
    //       { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
    //       { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
    //     ],
    //   },
  ];
  get filteredConversations() {
    console.log('hello');
    
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.latestMessage
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }
  token: string = localStorage.getItem("userid") ;
  status: string = "";
  constructor(
    private jobservice: JobofferService,
    private websocket: WebsocketService
  ) {}

  ngOnInit(): void {
  
      if (!localStorage.getItem("userid")) {
        this.token = localStorage.getItem("companyid") 
        this.jobservice.decodecomp(this.token).subscribe((id) => {
        this.websocket.getConversationsCompany(id.companyid).subscribe((messages) => {
          this.conversations = messages;
          console.log(this.conversations);
          this.ready = true
        });
        })
      } else {
        this.jobservice.decode(this.token).subscribe((id) => {
        this.websocket.getConversationsUser(id.userid).subscribe((messages) => {
          this.conversations = messages;
          console.log(this.conversations);
          this.ready = true
        });
      })
      }
    }
}
