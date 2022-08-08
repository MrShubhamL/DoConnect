import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute, private _message:MessageService) { }

  post = [
    {
      date:'',
      time:'',
      picName:'',
      pic:'',
      description:'',
      user:{
        id:"",
        firstName:"",
        middleName:"",
        lastName:"",
        contact:"",
        username:""
      },
      question:{
          id:"",
          question:"",
          createdDate:"",
      }
    }
  ]

  id:any = 0;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this._message.getPostByQuestionId(this.id).subscribe(
    (data:any)=>{
      this.post = data;
    }
    )
  }

}
