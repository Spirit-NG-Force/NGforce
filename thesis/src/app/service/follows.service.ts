import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class followsService {
  private apiUrl = "http://localhost:3000/";
  
  constructor(private http: HttpClient) {}

  addfollow(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl +"follows", option);
  }
  gettallfollow(): Observable<any> {
    return this.http.get<any>(this.apiUrl +"follows");
  }
  getfollow(option: any, option1: any): Observable<any> {
    return this.http.get<any>(this.apiUrl +"follows" + `/${option}` + `/${option1}`);
  }
  searchfollow(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl +"follows" + `/${option}`);
  }
  deletefollow(option: any, option1: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl +"follows" + `/${option}` + `/${option1}`);
  }
  addnotification(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl +"notifications", option);
  }
  findnotification(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl +"notifications" + `/${option}`);
  }
  gettallnotification(): Observable<any> {
    return this.http.get<any>(this.apiUrl +"notifications");
  }
  getfavorite(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl +"favorite" + `/${option}`);
  }
  createfavorite(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl +"favorite", option);
  }
  deletefavorite(option: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl +"favorite" + `/${option}`);
  }
}
