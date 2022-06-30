import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class AuthService{
    constructor(private http: HttpClient) {}

    api_Url = environment.api_Url;
    
    // https://localhost:44327/api/User/CreateUser


    registerUser(user: Array<string| null | undefined>){
      return  this.http.post(this.api_Url + "api/Api/CreateUser",
      {
        FirstName: user[0],
        LastName: user[1],
        Email: user[2],
        Mobile: user[3],
        Gender: user[4],
        Pwd: user[5]
      }, {
        responseType: 'text',
    });
    }
  }



