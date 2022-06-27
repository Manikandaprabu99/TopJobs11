import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { UpdatePostRequest } from 'src/app/models/update-post.model';
import { PostService } from 'src/app/services/Post.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }
   
  post: Post | undefined;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        const id = params.get('id');

        if(id){
          this.postService.getPostById(id).subscribe(
            response => {
              this.post = response;
            }
          );
        }
      }
    );
  }

  onSubmit():void {
    const updatePostRequest:UpdatePostRequest = {
      jobTitle:this.post?.jobTitle,
      companyName:this.post?.companyName,
      location:this.post?.location,
      salary:this.post?.salary,
      summary:this.post?.summary,
      visible:this.post?.visible,
      updatedDate:this.post?.updatedDate,
      publishDate:this.post?.publishDate,
      urlHandle:this.post?.urlHandle,
      featureImageUrl:this.post?.featureImageUrl

    }
    this.postService.updatePost(this.post?.id,updatePostRequest).subscribe(
      response => {
        alert('Updated Successfully');
      }
    );
    }

    deletePost(): void{
      this.postService.deletePost(this.post?.id)
      .subscribe(
        response =>{
          alert("DELETED successfully");
        }
      );
    }
   
  }
  

