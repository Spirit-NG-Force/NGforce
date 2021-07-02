import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class JobofferService1 {
  private apiUrl = "http://localhost:3000/follows";
  
  private apiUrl1 = "http://localhost:3000/notifications";
  private apiUrl2 = "http://localhost:3000/favorite";
  constructor(private http: HttpClient) {}
  addfollow(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl , option);
  }
  gettallfollow(): Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
  getfollow(option: any,option1 : any): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/${option}`+ `/${option1}`);
  }
  searchfollow(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/${option}`);
  }
  deletefollow(option: any,option1 : any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `/${option}`+ `/${option1}`);
  }
  addnotification(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl1 , option);
  }
  findnotification(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl1 + `/${option}`);
  }
  gettallnotification(): Observable<any> {
    return this.http.get<any>(this.apiUrl1);
  }
  getfavorite(option : any): Observable<any>{
    return this.http.get<any>(this.apiUrl2 + `/${option}`);
  }
  createfavorite(option : any): Observable<any>{
    return this.http.post<any>(this.apiUrl2 , option);
  }
  deletefavorite(option : any): Observable<any>{
    return this.http.delete<any>(this.apiUrl2 + `/${option}`);
  }
}