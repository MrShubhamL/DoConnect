import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  public loginStatusSubject = new Subject<boolean>();
  constructor(private http:HttpClient) { }

   // Generate token
   public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //Login user: set token in local storage
  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  // User is Login or Not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr == '' || tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }

  // Log out user : remove token from local storage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //If we want to get token from localstorage
  public getToken(){
    return localStorage.getItem("token");
  }

  // Setting user details
  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user));
  }

  // Getting user Details
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  // Getting user Role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }


  // Current User Details..
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }




}
