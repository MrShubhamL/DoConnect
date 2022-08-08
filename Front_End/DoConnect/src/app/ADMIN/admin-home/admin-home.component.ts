import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private _admin:AdminService) { }

  user:any;
  admin:any;
  question:any;
  answer:any;


  ngOnInit(): void {
    this._admin.getUserCount().subscribe(
      (data:any)=>{
        this.user = data;
        // alert("Success... " + this.user)
      },
      (Error:any)=>{
        alert("Error....")
      }
    )
    this._admin.getAdminCount().subscribe(
      (data:any)=>{
        this.admin = data;
        // alert("Success... " + this.user)
      },
      (Error:any)=>{
        alert("Error....")
      }
    )
    this._admin.getAllQuestionCount().subscribe(
      (data:any)=>{
        this.question = data;
        // alert("Success... " + this.user)
      },
      (Error:any)=>{
        alert("Error....")
      }
    )
    this._admin.getAllAnswerCount().subscribe(
      (data:any)=>{
        this.answer = data;
        // alert("Success... " + this.user)
      },
      (Error:any)=>{
        alert("Error....")
      }
    )
  }


}
