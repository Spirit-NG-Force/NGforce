import {Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";
import {JobofferService} from '../service/joboffer.service'
import { environment } from "../../environments/environment";


@Injectable()


export class WebsocketService {

    // private apiUrl = "http://localhost:3000/messages"
    constructor(private http: HttpClient ) {
    
    }
  
    socket: any;


    postMessages(option : any) : Observable<any>{
      return this.http.post<any>(environment.backendUrl, option);
    }

    getMessages(option : any) : Observable<any>{
        return this.http.get<any>(environment.backendUrl, option);
    }
  
    getConversationsUser(option:any): Observable<any>{
      return this.http.get<any>(environment.backendUrl + `/conversations/user/${option}`,option)
    }

    getConversationsCompany(option:any): Observable<any>{
      return this.http.get<any>(environment.backendUrl +  `/conversations/company/${option}`,option)
    }

}