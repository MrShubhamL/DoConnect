import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-admin-create-verifiaction',
  templateUrl: './admin-create-verifiaction.component.html',
  styleUrls: ['./admin-create-verifiaction.component.css']
})
export class AdminCreateVerifiactionComponent implements OnInit {

  constructor(private _sendOTP:MessageService, private _route:Router) { }

  show:Boolean = true;

  myOTP={
    otp:""
  }

  ngOnInit(): void {
    this._sendOTP.sendOTP().subscribe(
      (data:any)=>{
        // alert("OTP Send Successfully!..");
        this.show = false;
      },
      (errror:any)=>{
        alert("Something wents wrong..")
      }
    )
  }

  verifyOTP(sendForm:any){
    this.show = false;
    this._sendOTP.verifyOTP(sendForm.value.otp).subscribe(
      (data:any)=>{
        this._route.navigate(['hisudf-adf-asdfsdf-asdfdsf-asdf-gg/5445-454-545-5-151-1-88/adm-in-bor-ad'])
      },
      (error:any)=>{
        alert("OTP is not verified successfully..")
      }
    )
  }

}
