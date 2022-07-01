import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

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
    this.authService.EmployerLogin(
     [this.loginForm.value.email,
      this.loginForm.value.pwd]).subscribe(res=> {
      
      
        alert("login Successful");
        this.router.navigate(["/post-jobs"]);
       });
  }

  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }
}

