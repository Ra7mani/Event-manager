import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}


  signup(model: any): Observable<any> {
    return this.http.post(`${environment.url}/api/Account/register`,model);
  }
  signin(model: any): Observable<any> {
    return this.http.post(`${environment.url}/api/Account/Login`,model);
  }
  details(model: any): Observable<any> {
    return this.http.post(`${environment.url}/api/Account/Details`,model);
  }
  allusers(model: any): Observable<any> {
    return this.http.post(`${environment.url}/api/Account/AllUsers`,model);
  }
}
