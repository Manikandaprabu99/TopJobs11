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


  posts : Post[] = [];
  
  post : Post | undefined;


  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      response => {
        this.posts = response;
        this.post = this.posts[0];
  }
  );
  }
}