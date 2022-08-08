import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/model/ChatMessageDto';
import { SigninService } from 'src/app/services/signin.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private _user: SigninService, public webSocket:WebSocketService) { }

  time:Time;

  user = {
    firstName:"",
    lastName:"",
    username:"",
    contact:"",
  }
  
  ngOnInit(): void {
    this._user.getCurrentUser().subscribe(
      (data:any)=>{
        this.user = data;
      },
      (error:any)=>{
        alert("Server not responding..");
      }
      )
      
      this.webSocket.openWebSocket();
    }

    ngOnDestroy(): void {
      this.webSocket.closeWebSocket();
     
    }

  sendMessage(sendForm:NgForm){
    const chatMessageDto = new ChatMessageDto(String(this.user.firstName), sendForm.value.message)
    this.webSocket.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }


}
