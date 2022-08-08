import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {

  constructor(private _signup:SignupService, private _snakbar:MatSnackBar, private _router:Router) { }

  user = {
    firstName:"",
    middleName:"",
    lastName:"",
    contact:"",
    username:"",
    password:""
  }

  ngOnInit(): void {
    
  }

  formSubmit(){
    this._signup.createAdmin(this.user).subscribe(
      (data:any)=>{
          Swal.fire(
            {
              title: "Successfull",
              text: "Admin created successfully!!",
              confirmButtonAriaLabel: "OK",
              icon:"success"
            }
          )
          this.user.firstName = "";
          this.user.lastName = "";
          this.user.middleName = "";
          this.user.username = "";
          this.user.contact = "";
          this.user.password = "";
          this._router.navigate(['/'])
      },
      (eror:any)=>{
          Swal.fire(
            {
              title: "User is already exist!!",
              text: "Please use different username or email. Given email is already exist.",
              confirmButtonAriaLabel: "OK",
              icon:"error"
            }
          )
          this.user.username = "";
          this.user.password = "";
      }
    )
  }
}
