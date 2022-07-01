import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/Post.service';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.css']
})
export class FindJobsComponent implements OnInit {

 

  constructor(private postService:PostService) { }

  jobTitle: string =" ";
  
  posts : Post[] = [];
  
  nextposts: string = "";

  


  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      response => {
        this.posts = response;
        ;
  }
  );
  }


  Search(){
    if(this.jobTitle == ""){
      this.ngOnInit();
    }
    else{
      this.posts = this.posts.filter(res => {
        return res.jobTitle.toLocaleLowerCase().match(this.jobTitle.toLocaleLowerCase());
    
      });
    }
  }
}