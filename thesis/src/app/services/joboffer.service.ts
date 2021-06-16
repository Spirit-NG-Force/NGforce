import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobofferService {

  private apiUrl="http://localhost:3000/company"
  constructor(private http:HttpClient) { }

  postCompany(option : any): Observable<any>{
    return this.http.post<any>(this.apiUrl+"company",option)
  }

}
