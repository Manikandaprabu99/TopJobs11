import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AddPostRequest } from "../models/add-post.model";
import { Post } from "../models/post.model";
import { UpdatePostRequest } from "../models/update-post.model";



@Injectable({
    providedIn: 'root'
  })

export class PostService{
  
    constructor(private http: HttpClient) { }

    api_Url = environment.api_Url;

    getAllPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.api_Url + 'api/Api/');
  }

    getPostById(id: string): Observable<Post>{
      return this.http.get<Post>(this.api_Url + 'api/Api/' + id);
    }

    updatePost(id:string | undefined, updatePostRequest: UpdatePostRequest): Observable<Post>{
      return this.http.put<Post>(this.api_Url + 'api/Api/' + id, updatePostRequest);
    }

    addPost(addPostRequest: AddPostRequest):Observable<Post> {
      return this.http.post<Post>(this.api_Url + 'api/Api/' , addPostRequest);
    }

    deletePost(id: string | undefined):Observable<Post> {
      return this.http.delete<Post>(this.api_Url + 'api/Api/' + id);
    }
}
