import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Signup } from "../Signup";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class JobofferService {
  // private apiUrl = "http://localhost:3000/"; 
  private apiUrl_initkonect = "https://api.konnect.network/api/v1/payments/init-payment"; 
  private apiUrl_konect="https://api.konnect.network/api/v1/payments/:id";
  
  constructor(private http: HttpClient) {}

  postUser(option: Signup): Observable<any> {
    return this.http.post<any>(environment.backendUrl + "users/signup", option);
  }
  getUser(option: any): Observable<any> {
    return this.http.post<any>(environment.backendUrl + "users/login", option);
  }
  getAllUser(): Observable<any> {
    return this.http.get<any>(environment.backendUrl );
  }
  deleteUser(option:any): Observable<any> {
    return this.http.delete<any>(environment.backendUrl+`/${option}` );
  }
  getAllCompanies(): Observable<any> {
    return this.http.get<any>(environment.backendUrl + "company");
  }
  deleteCompany(option:any): Observable<any> {
    return this.http.delete<any>(environment.backendUrl+`company/${option}` );
  }
  getCompany(option: any): Observable<any> {
    return this.http.post<any>(environment.backendUrl + "company/login" , option);
  }
  postCompany(option: any): Observable<any> {
    return this.http.post<any>(environment.backendUrl +"company/signup", option);
  }
  decode(option : any ): Observable<any> {
    return this.http.get<any>(environment.backendUrl +`users/decode/${option}`);
  }

  decodecomp(option : any ): Observable<any> {
    return this.http.get<any>(environment.backendUrl +`company/decodecomp/${option}`);
  }

  iduser(option: any): Observable<any> {
    return this.http.get<any>(environment.backendUrl + `users/${option}`);
  }
  getonecv(option: any): Observable<any> {
    return this.http.get<any>(environment.backendUrl + `create-cv/${option}`);
  }
  createcv(option: any): Observable<any> {
    return this.http.post<any>(environment.backendUrl + "create-cv" , option);
  }
  updatecv(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(environment.backendUrl + `create-cv/${option}`,option1);
  }
  updatuser(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(environment.backendUrl + `users/${option}`,option1);
  }
  idcompany(option:any):Observable<any> {
    return this.http.get<any>(environment.backendUrl+ `company/${option}`); 
  }
  getonepostjob(option: any) : Observable<any> {
    return this.http.get<any>(environment.backendUrl + `postjob/${option}`);
  }
  createpostjob(option: any) : Observable<any> {
    return this.http.post<any>(environment.backendUrl +"postjob", option);
  }
  updatepostjob (option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(environment.backendUrl + `postjob/${option}`,option1);
  }
  updatecompany(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(environment.backendUrl + `company/${option}`,option1);
  }
  getallpostjob() : Observable<any> {
    return this.http.get<any>(environment.backendUrl+"postjob");
  }
  getallcv() : Observable<any> {
    return this.http.get<any>(environment.backendUrl +"create-cv");
  }
  search(option : any) : Observable<any> {
    return this.http.post<any>(environment.backendUrl+"postjob/searchps",option);
  }
  getpostjobs(option : any) : Observable<any> {
    return this.http.get<any>(environment.backendUrl+`postjob/${option}/find`);
  }
  deletepostjob(option : any) : Observable<any> {
    return this.http.delete<any>(environment.backendUrl+ `postjob/${option}`);
  }
  
  searchcv(option : any) : Observable<any> {
    return this.http.post<any>(environment.backendUrl+"create-cv/searchcv",option);
  }
  getcalendar(option : any) : Observable<any> {
    return this.http.get<any>(environment.backendUrl+`calendar/${option}`);
  }
  createcalendar(option : any) : Observable<any> {
    return this.http.post<any>(environment.backendUrl +"calendar",option);
  }
  updatecalendar(option : any,option1 : any) : Observable<any> {
    return this.http.patch<any>(environment.backendUrl+`calendar/${option}`,option1);
  }
  deletecalendar(option : any) : Observable<any> {
    return this.http.delete<any>(environment.backendUrl+`calendar/${option}`);
  }

  postPayment (option:any): Observable<any> {
    return this.http.post<any>(this.apiUrl_initkonect, option);
  }

  getPayment (option:any): Observable<any>{
    return this.http.get<any>(this.apiUrl_konect ,option);
  }

  postpayment_to_server(option:any):Observable<any>{
    return this.http.post<any>(environment.backendUrl+"company/payment",option)
  }

  postimg (option:any) : Observable<any> {
    return this.http.post<any>(environment.backendUrl +"create-cv/testcloudinary",option)
  }

  getsubscription(option:any):Observable<any>{
    return this.http.get<any>(environment.backendUrl+"subscription" ,option)
  }
}
