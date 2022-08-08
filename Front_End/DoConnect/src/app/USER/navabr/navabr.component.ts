import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.css']
})
export class NavabrComponent implements OnInit {

  constructor(private _signin:SigninService, private _router:Router) { }
  user = {
    firstName:"",
    middleName:"",
    lastName:"",
    contact:"",
    username:"",
  }

  ngOnInit(): void {
    this.user = this._signin.getUser();
  }


  logout(){
    this._signin.logout();
    this._signin.loginStatusSubject.next(false);
    this._router.navigate(['/'])
  }

}
