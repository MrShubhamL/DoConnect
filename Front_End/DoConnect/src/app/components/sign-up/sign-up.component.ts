import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _signup:SignupService, private _snakbar:MatSnackBar, private _router:Router) { }
  
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  user: User = {
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
      this._signup.createUser(this.user).subscribe(
        (data:any)=>{
            Swal.fire(
              {
                title: "Successfull",
                text: "User created successfully!!",
                confirmButtonAriaLabel: "OK",
                icon:"success"
              }
            )
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

}
