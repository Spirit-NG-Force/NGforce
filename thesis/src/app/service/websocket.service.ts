import {Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";


@Injectable()


export class WebsocketService {

    private apiUrl = "http://localhost:3000/messages"
    constructor(private http: HttpClient) {
      this.socket = io('ws://localhost:3000')
    }
  
    socket: any;

    postMessages(option : any) : Observable<any>{
      return this.http.post<any>(this.apiUrl + "/messages", option);
    }

    getMessages(option : any) : Observable<any>{
      return this.http.get<any>(this.apiUrl + "/messages", option);
    }
  
    listen(eventName: string) {
      return new Observable((subscriber) => {
        this.socket.on(eventName, (data) => {
          subscriber.next(data);
        })
      });
    }
  
    emit(eventName: string, data: any) {
      this.socket.emit(eventName, data);
    }
  
  }