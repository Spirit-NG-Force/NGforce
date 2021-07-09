import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Signup } from "../Signup";
@Injectable({
  providedIn: "root",
})
export class JobofferService {
  private apiUrl = "/"; 
  private apiUrl_initkonect = "https://api.preprod.konnect.network/api/v1/payments/init-payment"; 
  private apiUrl_konect="https://api.preprod.konnect.network/api/v1/payments/:id";
  
  constructor(private http: HttpClient) {}

  postUser(option: Signup): Observable<any> {
    return this.http.post<any>(this.apiUrl + "users/signup", option);
  }
  getUser(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "users/login", option);
  }
  getCompany(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "company/login" , option);
  }
  postCompany(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl +"company/signup", option);
  }
  decode(option : any ): Observable<any> {
    return this.http.get<any>(this.apiUrl +`users/decode/${option}`);
  }

  decodecomp(option : any ): Observable<any> {
    return this.http.get<any>(this.apiUrl +`company/decodecomp/${option}`);
  }

  iduser(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + `users/${option}`);
  }
  getonecv(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + `create-cv/${option}`);
  }
  createcv(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "create-cv" , option);
  }
  updatecv(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl + `create-cv/${option}`,option1);
  }
  updatuser(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl + `users/${option}`,option1);
  }
  idcompany(option:any):Observable<any> {
    return this.http.get<any>(this.apiUrl+ `company/${option}`); 
  }
  getonepostjob(option: any) : Observable<any> {
    return this.http.get<any>(this.apiUrl + `postjob/${option}`);
  }
  createpostjob(option: any) : Observable<any> {
    return this.http.post<any>(this.apiUrl +"postjob", option);
  }
  updatepostjob (option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl + `postjob/${option}`,option1);
  }
  updatecompany(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl + `company/${option}`,option1);
  }
  getallpostjob() : Observable<any> {
    return this.http.get<any>(this.apiUrl+"postjob");
  }
  getallcv() : Observable<any> {
    return this.http.get<any>(this.apiUrl +"create-cv");
  }
  search(option : any) : Observable<any> {
    return this.http.post<any>(this.apiUrl+"postjob/searchps",option);
  }
  getpostjobs(option : any) : Observable<any> {
    return this.http.get<any>(this.apiUrl+`postjob/${option}/find`);
  }
  deletepostjob(option : any) : Observable<any> {
    return this.http.delete<any>(this.apiUrl+ `postjob/${option}`);
  }
  
  searchcv(option : any) : Observable<any> {
    return this.http.post<any>(this.apiUrl+"create-cv/searchcv",option);
  }
  getcalendar(option : any) : Observable<any> {
    return this.http.get<any>(this.apiUrl+`calendar/${option}`);
  }
  createcalendar(option : any) : Observable<any> {
    return this.http.post<any>(this.apiUrl +"calendar",option);
  }
  updatecalendar(option : any,option1 : any) : Observable<any> {
    return this.http.patch<any>(this.apiUrl+`calendar/${option}`,option1);
  }
  deletecalendar(option : any) : Observable<any> {
    return this.http.delete<any>(this.apiUrl+`calendar/${option}`);
  }

  postPayment (option:any): Observable<any> {
    return this.http.post<any>(this.apiUrl_initkonect, option);
  }

  getPayment (option:any): Observable<any>{
    return this.http.get<any>(this.apiUrl_konect ,option);
  }

  postpayment_to_server(option:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+"company/payment",option)
  }

  postimg (option:any) : Observable<any> {
    return this.http.post<any>(this.apiUrl +"create-cv/testcloudinary",option)
  }

  getsubscription(option:any):Observable<any>{
    return this.http.get<any>(this.apiUrl+"subscription" ,option)
  }
}
