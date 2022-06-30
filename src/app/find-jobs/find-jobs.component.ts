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
  
  nextposts: string = "";

  JobNameSearch:string="";
  JobListWithoutSearch:any=[];


  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      response => {
        this.posts = response;
        ;
  }
  );
  }

//  SearchFn(){
//     var JobNameSearch=this.JobNameSearch;
    
//     this.JobNameSearch = this.JobListWithoutSearch.filter(function (el:any){
//       return el.jobTitle.toString().toLowerCase().includes(
//         JobNameSearch.toString().trim().toLowerCase()
//       )
//   });
//   }
}






// <div class="container" *ngIf="posts">
//       <div *ngFor = "let post of posts" class="card h-100" style="max-width: 200px;" >

//         <img [src]="post.featureImageUrl" class="card-img-top" alt="...">

        
//         <div class="card-body">
//           <h3 class="card-title">{{ post.jobTitle }}</h3>
//           <br>
//           <article class="card-text">
//             {{ post.summary }}
//           </article>
//     <br>
//           <a class="btn btn-primary" [routerLink]="['/apply-job',post.id]">Apply</a>
          
//         </div>
//       </div>
//     </div>
