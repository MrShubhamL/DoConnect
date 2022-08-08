import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs';
import { AnswerService } from 'src/app/services/answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-answers',
  templateUrl: './all-answers.component.html',
  styleUrls: ['./all-answers.component.css']
})
export class AllAnswersComponent implements OnInit {

  constructor(private _answer:AnswerService, private _router:Router, private _snakbar:MatSnackBar) { }
  durationInSeconds = 7;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  ans = [
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
      },
      question:{
        id:'',
        question:"",
        user:{
          firstName:"",
          lastName:"",
          username:""
        }
      }
    }
  ]

  ngOnInit(): void {
    this._answer.getAllUserAnswers().subscribe(
      (data:any)=>{
          this.ans = data;
      },
      (error:any)=>{
        alert("Error...")
      }
    )
  }

  delete(id:any){
    alert("ANswer id: " + id)
    
    this._answer.deleteAnswer(id).subscribe(
      (data:any)=>{
        this._snakbar.open("Answer is deleted.","",{
          duration:this.durationInSeconds * 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        // this._router.navigate(['/user-dashboard/home'])
        // window.location.reload();
      },
      (error:any)=>{
        alert("Failed...")
        // window.location.reload();
      }
    )
  }

}
