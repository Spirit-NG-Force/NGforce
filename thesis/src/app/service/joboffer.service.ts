import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Signup } from "../Signup";
@Injectable({
  providedIn: "root",
})
export class JobofferService {
  private apiUrl = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  postUser(option: Signup): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/signup", option);
  }
  getUser(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login", option);
  }
}
