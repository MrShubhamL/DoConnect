import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackbar:MatSnackBar, private login:SigninService, private router:Router) { }

    public user = {
    username: '',
    password: ''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.user.username=="" || this.user.username==null){
      this._snackbar.open("Username is required!","",{
        duration:this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
        return;
    }
    else{
      this.login.generateToken(this.user).subscribe(
        (data:any)=>{
          this.login.loginUser(data.token);
          this.login.getCurrentUser().subscribe(
            (user:any)=>{
              this.login.setUser(user);
              if(this.login.getUserRole()=="ADMIN"){
                this.router.navigate(['admin-dashboard/home']);
                this.login.loginStatusSubject.next(true);
              }
              else if(this.login.getUserRole()=="NORMAL"){
                  this.router.navigate(['user-dashboard/home']);
                  this.login.loginStatusSubject.next(true);
                }
                else{
                  // Logout user
                  this.login.logout();
                  this._snackbar.open("Invalid Credentials!! Please enter correct details","",{
                    duration:this.durationInSeconds * 1000,
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                  });
                }
            }
          )
        },
        (error:any)=>{
          this.login.logout();
            this._snackbar.open("Invalid Credentials!! Please enter correct details","",{
              duration:this.durationInSeconds * 1000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            // window.location.reload()
        }
      )
    }
  }

}
