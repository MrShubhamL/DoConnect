import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { MessageService } from 'src/app/services/message.service';
import { QuestionService } from 'src/app/services/question.service';
import { SigninService } from 'src/app/services/signin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-given-answers',
  templateUrl: './given-answers.component.html',
  styleUrls: ['./given-answers.component.css']
})
export class GivenAnswersComponent implements OnInit {

  constructor(private _question:QuestionService, 
    private _answer:AnswerService,
    private _Activatedroute:ActivatedRoute,
    private _message:MessageService,
    private _snackbar:MatSnackBar,
    private _user: SigninService
    ) { }

    durationInSeconds = 5;
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  question = {
    id:'',
    question:"",
    createdDate:'',
    createdTime:'',
    user:{
      username:""
    }
  }

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



  id:any=0;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this._question.getQuestionById(this.id).subscribe(
      (data:any)=>{
        this.question = data;
      },
      (error:any)=>{
        alert("Error....")
      }
    )

    this._answer.getAllEnabledAnswers(this.id).subscribe(
      (data:any)=>{
        this.answers = data;
      },
      (error:any)=>{
        alert("Error....")
      }
    )
  }





}
