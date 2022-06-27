import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from '../models/add-post.model';
import { PostService } from '../services/Post.service';


@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {

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
