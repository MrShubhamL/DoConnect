import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(private _question:QuestionService, 
    private _answer: AnswerService,
    private _Activatedroute:ActivatedRoute,
    private _snakbar:MatSnackBar,
    private _router: Router) { }

    durationInSeconds = 5;
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

  question = {
    id:'',
    question:''
  }

  answer = {
    answer:''
  }

  id:any = 0;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this._question.getQuestionById(Number(this.id)).subscribe(
      (data:any)=>{
        this.question = data;
      },
      (error:any)=>{
        alert("Error...")
      }
    )
  }

  formSubmit(){
    if(this.answer.answer == ""){
      this._snakbar.open("Please werite answer!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    else{
      this._answer.addAnswer(this.answer,this.id).subscribe(
        (data:any)=>{
          Swal.fire(
            {
              title: "Answer Post Successfully!!",
              text:"Youe answer is submited successfully. Thank you for helping us.",
              confirmButtonAriaLabel:"Ok"
            }
          )
          this._router.navigate(['/user-dashboard/user-answers'])
        },
        (error:any)=>{
          alert("Error...")
        }
      )
    }
  }

}
