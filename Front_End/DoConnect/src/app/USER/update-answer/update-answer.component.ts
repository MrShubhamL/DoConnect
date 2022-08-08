import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-answer',
  templateUrl: './update-answer.component.html',
  styleUrls: ['./update-answer.component.css']
})
export class UpdateAnswerComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,
    private _snackbar : MatSnackBar,
     private _answer:AnswerService, private _question:QuestionService,
     private _router:Router) { }

     durationInSeconds = 5;
     horizontalPosition: MatSnackBarHorizontalPosition = 'right';
     verticalPosition: MatSnackBarVerticalPosition = 'top';

  queId:any = 0;

  answer = {
    answer:''
  }

  question = {
    id:'',
    question:"",
    createdDate:'',
    createdTime:'',
    user:{
      username:""
    }
  }

  myAns = {
    answer:''
  }

  ansId:any = 0;
  ngOnInit(): void {
    this.queId = this._Activatedroute.snapshot.paramMap.get("queId");
    this.ansId = this._Activatedroute.snapshot.paramMap.get("ansId");
    this._question.getQuestionById(Number(this.queId)).subscribe(
      (data:any)=>{
        this.question = data;
      },
      (error:any)=>{
        alert("Error...")
      }
    )

    this._answer.getAnswerById(this.ansId).subscribe(
      (data:any)=>{
        this.myAns = data;
      },
      (Error:any)=>{
        alert("Error....")
      }
    )
  }



  formSubmit(){
    if(this.answer.answer == ""){
      this._snackbar.open("Please werite answer!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    else{
      this._answer.updateAnswer(this.answer, this.ansId, this.queId).subscribe(
        (data:any)=>{
          Swal.fire(
            {
              title: "Answer Updated Successfully!!",
              text:"Youe answer is updated successfully.",
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
