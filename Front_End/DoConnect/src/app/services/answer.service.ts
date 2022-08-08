import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private _http:HttpClient) { }

  public addAnswer(answer:any, id:Number){
    return this._http.post(`${baseUrl}/user/create-answer/${id}`,answer)
  }

  
  public updateAnswer(answer:any, ansId:any, queId:any){
    return this._http.post(`${baseUrl}/user/update-answer/${ansId}/${queId}`,answer)
  }
  
  public getAllAnswersByQuestionId(id:any){
    return this._http.get(`${baseUrl}/user/all-answers/${id}`)
  }

  public getAllEnabledAnswers(id:any){
    return this._http.get(`${baseUrl}/user/all-enabled-answers/${id}`)
  }

  public getAllUserAnswers(){
    return this._http.get(`${baseUrl}/user/all-user-answers/`)
  }

  public deleteAnswer(id:any){
    return this._http.delete(`${baseUrl}/user/delete-answer/${id}`)
  }

  public getAnswerById(id:any){
    return this._http.get(`${baseUrl}/user/single-answer/${id}`);
  }

  public getAllAnswers(){
    return this._http.get(`${baseUrl}/user/all-questions`)
  }

  public approveAnswer(id:any){
    return this._http.post(`${baseUrl}/admin/approve-answer/${id}`,id);
  }

  public disableAnswer(id:any){
    return this._http.post(`${baseUrl}/admin/disable-answer/${id}`,id);
  }

  public deleteANswerById(id:any){
    return this._http.delete(`${baseUrl}/admin/deleteAnswerNow/${id}`);
  }

}
