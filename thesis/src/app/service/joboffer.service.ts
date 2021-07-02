import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Signup } from "../Signup";
@Injectable({
  providedIn: "root",
})
export class JobofferService {
  private apiUrl = "http://localhost:3000/users";
  private apiUrl1 = "http://localhost:3000/company";
  private apiUrl2 = "http://localhost:3000/create-cv";
  private apiUrl3 = "http://localhost:3000/postjob"; 
  private apiUrl4 = "http://localhost:3000/calendar"; 
  private apiUrl5 = "https://api.preprod.konnect.network/api/v1/payments/init-payment"; 
  constructor(private http: HttpClient) {}

  postUser(option: Signup): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/signup", option);
  }
  getUser(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login", option);
  }
  getAllUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
  deleteUser(option:any): Observable<any> {
    return this.http.delete<any>(this.apiUrl+`/${option}` );
  }
  getAllCompanies(): Observable<any> {
    return this.http.get<any>(this.apiUrl1 );
  }
  deleteCompany(option:any): Observable<any> {
    return this.http.delete<any>(this.apiUrl1+`/${option}` );
  }
  getCompany(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl1 + "/login" , option);
  }
  postCompany(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl1 +"/signup", option);
  }
  decode(option : any ): Observable<any> {
    return this.http.get<any>(this.apiUrl +`/decode/${option}`);
  }

  decodecomp(option : any ): Observable<any> {
    return this.http.get<any>(this.apiUrl1 +`/decodecomp/${option}`);
  }

  iduser(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/${option}`);
  }
  getonecv(option: any): Observable<any> {
    return this.http.get<any>(this.apiUrl2 + `/${option}`);
  }
  createcv(option: any): Observable<any> {
    return this.http.post<any>(this.apiUrl2 , option);
  }
  updatecv(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl2 + `/${option}`,option1);
  }
  updatuser(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl + `/${option}`,option1);
  }
  idcompany(option:any):Observable<any> {
    return this.http.get<any>(this.apiUrl1 + `/${option}`); 
  }
  getonepostjob(option: any) : Observable<any> {
    return this.http.get<any>(this.apiUrl3 + `/${option}`);
  }
  createpostjob(option: any) : Observable<any> {
    return this.http.post<any>(this.apiUrl3 , option);
  }
  updatepostjob (option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl3 + `/${option}`,option1);
  }
  updatecompany(option: any,option1 : any ): Observable<any> {
    return this.http.patch<any>(this.apiUrl1 + `/${option}`,option1);
  }
  getallpostjob() : Observable<any> {
    return this.http.get<any>(this.apiUrl3);
  }
  getallcv() : Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }
  search(option : any) : Observable<any> {
    return this.http.post<any>(this.apiUrl3+"/searchps",option);
  }
  getpostjobs(option : any) : Observable<any> {
    return this.http.get<any>(this.apiUrl3+`/${option}/find`);
  }
  deletepostjob(option : any) : Observable<any> {
    return this.http.delete<any>(this.apiUrl3+ `/${option}`);
  }
  
  searchcv(option : any) : Observable<any> {
    return this.http.post<any>(this.apiUrl2+"/searchcv",option);
  }
  getcalendar(option : any) : Observable<any> {
    return this.http.get<any>(this.apiUrl4+`/${option}`);
  }
  createcalendar(option : any) : Observable<any> {
    return this.http.post<any>(this.apiUrl4,option);
  }
  updatecalendar(option : any,option1 : any) : Observable<any> {
    return this.http.patch<any>(this.apiUrl4+`/${option}`,option1);
  }
  deletecalendar(option : any) : Observable<any> {
    return this.http.delete<any>(this.apiUrl4+`/${option}`);
  }

// payment subscription
  postPayment (option:any): Observable<any> {
    return this.http.post<any>(this.apiUrl5, option);
  }

  postimg (option:any) : Observable<any> {
    return this.http.post<any>(this.apiUrl2+"/testcloudinary",option)
  }
}
