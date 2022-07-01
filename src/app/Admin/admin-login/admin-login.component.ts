import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    
  }
  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  loginSubmitted(){
    this.authService.AdminLogin(
     [this.loginForm.value.email,
      this.loginForm.value.pwd]).subscribe(res=> {
      
      
        alert("login Successful");
        this.router.navigate(["/Admin/posts"]);
       });
  }

  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }
}

