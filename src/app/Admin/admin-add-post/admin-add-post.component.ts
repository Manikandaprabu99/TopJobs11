import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from 'src/app/models/add-post.model';
import { PostService } from 'src/app/services/Post.service';


@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService) { }

post: AddPostRequest ={
  jobTitle: '',
  companyName: '',
  salary: '',
  location: '',
  updatedDate: '',
  publishDate: '',
  urlHandle: '',
  featureImageUrl: '',
  summary: '',
  visible: true
}

  ngOnInit(): void {
  }

  onSubmit() :void{
    this.postService.addPost(this.post).subscribe(
      response =>{
        alert("JOB ADDED");
      }
    );
  }
}
