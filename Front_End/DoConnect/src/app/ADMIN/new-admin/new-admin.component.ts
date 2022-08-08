import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  constructor(private _signup:SignupService, private _snakbar:MatSnackBar, private _router:Router) { }

  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

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
    if(this.user.username == "" || this.user.password == ""){
      this._snakbar.open("All fields are required!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
    else{
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

}
