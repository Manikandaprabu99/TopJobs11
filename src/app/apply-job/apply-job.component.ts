import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/Post.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
   
  post: Post | undefined;
  constructor(private postService: PostService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        const id = params.get('id');
        if(id){
          this.postService.getPostById(id).subscribe(
            response =>{
              this.post = response;
            }
          );
        }
      }
    );
  }

}
