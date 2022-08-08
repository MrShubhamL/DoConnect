import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http:HttpClient) { }

  otpURL = "http://localhost:3232"

  public createPost(post:any, id:any){
    return this._http.post(`${baseUrl}/user/create-post/${id}`,post)
  }

  public getPostByQuestionId(id:any){
    return this._http.get(`${baseUrl}/user/user-post/${id}`)
  }

  public getAllPost(){
    return this._http.get(`${baseUrl}/user/all-posts/`)
  }

  // otp sender.....

  public sendOTP(){
    return this._http.post(`${this.otpURL}/user/create-new-admin/7769038180/sendOTP`,Request)
  }

  public verifyOTP(otp:any){
    return this._http.post(`${this.otpURL}/user/create-new-admin/verify-otp/${otp}`,otp)
  }

}
