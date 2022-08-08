import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }


  public getUserCount(){
    return this._http.get(`${baseUrl}/admin/count-users/`);
  }

  public getAdminCount(){
    return this._http.get(`${baseUrl}/admin/count-admins/`);
  }

  public getAllUsers(){
    return this._http.get(`${baseUrl}/admin/all-active-users`);
  }

  public getAllQuestionCount(){
    return this._http.get(`${baseUrl}/admin/count-questions/`);
  }

  public getAllAnswerCount(){
    return this._http.get(`${baseUrl}/admin/count-answers/`);
  }


}
