import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  public addQuestion(question:any){
    return this._http.post(`${baseUrl}/user/add-question/`,question)
  }

  public getAllQuestions(){
    return this._http.get(`${baseUrl}/user/all-questions/`)
  }

  public getQuestionById(id:any){
    return this._http.get(`${baseUrl}/user/single-question/${id}`)
  }

  public getEnabledQuestions(){
    return this._http.get(`${baseUrl}/user/enabled-questions/`)
  }

  public approveQuesion(id:any){
    return this._http.post(`${baseUrl}/admin/approve-question/${id}`, id);
  }

  public disableQuesion(id:any){
    return this._http.post(`${baseUrl}/admin/disabled-question/${id}`, id);
  }

  public deleteQuestionById(id:any){
    return this._http.delete(`${baseUrl}/admin/delete-question/${id}`);
  }

  public searchQuestion(name:any){
    return this._http.get(`${baseUrl}/user/search-name/${name}`);
  }
}
