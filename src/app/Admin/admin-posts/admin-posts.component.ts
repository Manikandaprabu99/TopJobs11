import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/Post.service';


@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  constructor(private postservice: PostService) { }


  posts: Post[] =[];

  ngOnInit(): void {
    this.postservice.getAllPosts().subscribe(
      response => {
        this.posts = response;
        console.log(this.posts);
      }
      );
    }
  
  }
  