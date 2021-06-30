import {Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";
import {JobofferService} from '../service/joboffer.service'


@Injectable()


export class WebsocketService {

    private apiUrl = "http://localhost:3000/messages"
    constructor(private http: HttpClient ) {
      this.socket = io('ws://localhost:3000')
    }
  
    socket: any;


    postMessages(option : any) : Observable<any>{
      return this.http.post<any>(this.apiUrl, option);
    }

    getMessages(option : any) : Observable<any>{
        return this.http.get<any>(this.apiUrl, option);
    }
  
    getConversationsUser(option:any): Observable<any>{
      return this.http.get<any>(this.apiUrl + `/conversations/user/${option}`,option)
    }

    getConversationsCompany(option:any): Observable<any>{
      return this.http.get<any>(this.apiUrl + "/conversations/company",option)
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