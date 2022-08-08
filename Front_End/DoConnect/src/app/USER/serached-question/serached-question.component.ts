import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-serached-question',
  templateUrl: './serached-question.component.html',
  styleUrls: ['./serached-question.component.css']
})
export class SerachedQuestionComponent implements OnInit {

  constructor(private _signin:SigninService, 
    private _question: QuestionService, 
    private _answer: AnswerService,
    private _snackbar: MatSnackBar,
    private _activateRoute:ActivatedRoute) { }

  myQuestions =
    {
      id:"",
      question:"",
      createdDate:"",
      user:{
        id:"",
        firstName:"",
        middleName:"",
        lastName:"",
        contact:"",
        username:""
      }
    }


  id:any = 0;
  ngOnInit(): void {
    this.id = this._activateRoute.snapshot.paramMap.get("id")
    this._question.getQuestionById(this.id).subscribe(
      (data:any)=>{
        this.myQuestions = data;
      }
    )
  }

}
