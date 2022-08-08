import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  constructor(private _question: QuestionService, private _snackbar:MatSnackBar) { }

  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

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

  ngOnInit(): void {
    this._question.getAllQuestions().subscribe(
      (data:any)=>{
        this.myQuestions = data;
      },
      (error:any)=>{
        alert("Error....");
      }
    )
  }


  approve(id:any){
    // alert("Approved.." + id)
    this._question.approveQuesion(id).subscribe(
      (data:any)=>{
        // alert("Success....")
        window.location.reload();
        this._snackbar.open("Question approved successfully!","",{
          duration:this.durationInSeconds * 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      },
      (Error:any)=>{
        alert("Error....")
      }
    )
  }

  disabled(id:any){
    // alert("Disabled.. " + id)
    this._question.disableQuesion(id).subscribe(
      (data:any)=>{
        window.location.reload();
        this._snackbar.open("Question disabled successfully!","",{
          duration:this.durationInSeconds * 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        // alert("Success...")
      },
      (error:any)=>{
        alert("Error....")
      }
    )
  }


  delete(id:any){
    this._question.deleteQuestionById(id).subscribe(
      (data:any)=>{
        // this.myQuestions = this.myQuestions.filter((que) => {que.id != id})
        Swal.fire({
          title: "Delete!!",
          text: "Question deleted successfully!!..",
          icon:"info",
          confirmButtonText:"Ok"
        })
        // window.location.reload();
      },
      (error:any)=>{
        alert("Failed....")
      }
    )
  }

}
