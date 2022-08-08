import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-user-answers',
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.css']
})
export class UserAnswersComponent implements OnInit {

  constructor(private _question:QuestionService, private _answer:AnswerService) { }

  myQuestions = [
    {
      id:"",
      question:"",
      createdDate:"",
      enabled:Boolean,
      user:{
        id:"",
        firstName:"",
        middleName:"",
        lastName:"",
        contact:"",
        username:""
      }
    }
  ]

  answers = [
    {
      id:'',
      answer:'',
      createdDate:'',
      createdTime:'',
      user:{
        id:'',
        firstName:'',
        lastName:"",
        username:''
      }
    }
  ]

  ngOnInit(): void {
    this._question.getAllQuestions().subscribe(
      (data:any)=>{
        this.myQuestions = data;
      },
      (error:any)=>{
        alert("Error.....")
      }
    )

  }


}
