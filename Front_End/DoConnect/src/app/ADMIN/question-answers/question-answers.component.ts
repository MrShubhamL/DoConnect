import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit {

  constructor(private _question:QuestionService, private _answer:AnswerService, private _Activatedroute: ActivatedRoute) { }

  myQuestions = 
    {
      id:"",
      question:"",
      createdDate:"",
      enabled:Boolean,
      user:{
        username:"",
        createdTime:"",
        createdDate:"",
      }
    }

    ans = [
      {
        id:'',
        answer:'',
        createdDate:'',
        createdTime:'',
        enabled:Boolean,
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

    id:any = 0;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this._question.getQuestionById(this.id).subscribe(
      (data:any)=>{
        this.myQuestions = data;
      },
      (Error:any)=>{
        alert("Error....")
      }
    )

    this._answer.getAllAnswersByQuestionId(this.id).subscribe(
      (data:any)=>{
        this.ans = data;
      },
      (eror:any)=>{
        alert("Error.....")
      }
    )
  }

  approve(id:any){
    this._answer.approveAnswer(id).subscribe(
      (data:any)=>{
        Swal.fire({
          icon:'info',
          title:'Are you sure ?',
          html:"Enable Answer (Visible to all).",
          confirmButtonText:'Enable',
          showCancelButton:true,
          timerProgressBar:true,
          timer: 5000,
        }).then((result)=>{
          if(result.isConfirmed){
            window.location.reload();
          }
        })
      },
      (error:any)=>{
        alert("Failed...")
      }
    )
  }

  reject(id:any){
    this._answer.disableAnswer(id).subscribe(
      (data:any)=>{
        // alert("Success...")
        Swal.fire({
          icon:'info',
          title:'Are you sure ?',
          html:"Disable Answer (Invisible to all).",
          confirmButtonText:'Disable',
          showCancelButton:true,
          timerProgressBar:true,
          timer: 5000,
        }).then((result)=>{
          if(result.isConfirmed){
            window.location.reload();
          }
        })
      },
      (error:any)=>{
        alert("Failed...")
      }
    )
  }

  // delete(id:any){
  //   alert("Answer id: " + id)
  //       Swal.fire({
  //         icon:'info',
  //         title:'Are you sure ?',
  //         html:"Delete Answer (Answer will be delete permenantly.).",
  //         confirmButtonText:'Delete',
  //         showCancelButton:true,
  //         timerProgressBar:true,
  //         timer: 5000,
  //       }).then((result)=>{
  //         if(result.isConfirmed){
  //           this._answer.deleteANswerById(id).subscribe(
  //             (data:any)=>{
  //               // window.location.reload();
  //             },
  //             (error:any)=>{
  //               alert("Error...")
  //             }
  //           )
  //         }
  //       })
  //     }

}
