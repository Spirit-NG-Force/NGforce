import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class followsService {
  // private apiUrl = "http://localhost:3000/";
  
  constructor(private http: HttpClient) {}

  addfollow(option: any): Observable<any> {
    return this.http.post<any>(environment.backendUrl +"follows", option);
  }
  gettallfollow(): Observable<any> {
    return this.http.get<any>(environment.backendUrl +"follows");
  }
  getfollow(option: any, option1: any): Observable<any> {
    return this.http.get<any>(environment.backendUrl +"follows" + `/${option}` + `/${option1}`);
  }
  searchfollow(option: any): Observable<any> {
    return this.http.get<any>(environment.backendUrl +"follows" + `/${option}`);
  }
  deletefollow(option: any, option1: any): Observable<any> {
    return this.http.delete<any>(environment.backendUrl +"follows" + `/${option}` + `/${option1}`);
  }
  addnotification(option: any): Observable<any> {
    return this.http.post<any>(environment.backendUrl +"notifications", option);
  }
  findnotification(option: any): Observable<any> {
    return this.http.get<any>(environment.backendUrl +"notifications" + `/${option}`);
  }
  gettallnotification(): Observable<any> {
    return this.http.get<any>(environment.backendUrl +"notifications");
  }
  getfavorite(option: any): Observable<any> {
    return this.http.get<any>(environment.backendUrl +"favorite" + `/${option}`);
  }
  createfavorite(option: any): Observable<any> {
    return this.http.post<any>(environment.backendUrl +"favorite", option);
  }
  deletefavorite(option: any): Observable<any> {
    return this.http.delete<any>(environment.backendUrl +"favorite" + `/${option}`);
  }
}
