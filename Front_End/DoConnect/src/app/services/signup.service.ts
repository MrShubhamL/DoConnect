import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient) { }


  public createUser(user:any){
    return this._http.post(`${baseUrl}/user/`,user);
  }

  public createAdmin(user:any){
    return this._http.post(`${baseUrl}/admin/`,user);
  }

}
