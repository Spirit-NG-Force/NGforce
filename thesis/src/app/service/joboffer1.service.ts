import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class JobofferService1 {
  private apiUrl = "http://localhost:3000/follows";
  constructor(private http: HttpClient) {}
  addfollow(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl , option);
  }
  getfollow(option: any,option1 : any): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/${option}`+ `/${option1}`);
  }
  deletefollow(option: any,option1 : any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `/${option}`+ `/${option1}`);
  }
  
}