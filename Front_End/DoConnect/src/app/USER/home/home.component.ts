import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AnswerService } from 'src/app/services/answer.service';
import { MessageService } from 'src/app/services/message.service';
import { QuestionService } from 'src/app/services/question.service';
import { SigninService } from 'src/app/services/signin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _signin:SigninService, 
    private _question: QuestionService, 
    private _answer: AnswerService,
    private _message: MessageService,
    private _post: MessageService,
    private _snackbar: MatSnackBar) { }
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  panelOpenState = false;

  question = {
    question:"",
    topic:""
  }

  answers = {
    answer:""
  }

  myQuestions = [
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
  ]

 searchedQuestion = [
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
  ]

  ngOnInit(): void {
   this._question.getEnabledQuestions().subscribe(
    (data:any)=>{
      this.myQuestions = data;
    },
    (error:any)=>{
      alert("Error...")
    }
   )

  }

  askQuestion(){
    if(this.question.question == "" || this.question.topic == "" || this.question.topic == null){
      this._snackbar.open("Question is required!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    else{
      this._question.addQuestion(this.question).subscribe(
        (data:any)=>{
          Swal.fire(
            {
              title: "Uploaded",
              text: "Question is Uploaded. Please wait for question approval.",
              confirmButtonAriaLabel: "OK",
              icon:"success"
            }
            )
          window.location.reload();
        },
        (error:any)=>{
          Swal.fire(
            {
              title: "Please Try Latter",
              text: "Server is busy now, Please try latter.",
              confirmButtonAriaLabel: "OK",
              icon:"error"
            }
          )
        }
      )
    }
  }

  name:any = "";
  display:Boolean = false;
  searchNow(){
    this.name = (<HTMLInputElement>document.getElementById("searchBox")).value;
    if(this.name == "" || this.name == null){
      this.display == false;
      this.name = (<HTMLInputElement>document.getElementById("searchBox")).innerText = "";
      this.searchedQuestion == null;
    }
    else{
      this._question.searchQuestion(this.name).subscribe(
        (data:any)=>{
          this.display == true;
          this.searchedQuestion = data;
        },
        (error:any)=>{
          this.display == false;
          alert("error..")
        }
      )
    }
  }


}
