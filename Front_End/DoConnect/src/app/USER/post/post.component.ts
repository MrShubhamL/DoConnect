import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: MessageService, private _Activatedroute:ActivatedRoute) { }

  post = {
    pic:'',
    description:""
  }

  id:any = 0;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
  }

  postSubmit(){
    if(this.post.pic == null || this.post.pic == "" || this.post.description == ""){
      alert("All fields are required.")
    }
    else{
      this.postService.createPost(this.post, this.id).subscribe(
        (data:any)=>{
          Swal.fire({
            title:"Post Successful",
            text:"Post has been successfully uploaded.",
            confirmButtonAriaLabel:"OK"
          })

          this.post.pic = "",
          this.post.description = ""
        },
        (Error:any)=>{
          alert("Error....")
        }
      )
    }
  }

}
