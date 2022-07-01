import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SignupComponent } from './signup/signup.component';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { HomeComponent } from './home/home.component';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { AdminPostsComponent } from './Admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './Admin/admin-view-post/admin-view-post.component';
import { AdminAddPostComponent } from './Admin/admin-add-post/admin-add-post.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { EmpnavBarComponent } from './empnav-bar/empnav-bar.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';




const routes: Routes = [
  {path:'NavBar',component:NavBarComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path: 'Profile-Details',component:ProfileDetailsComponent},
  {path: 'Find-Jobs',component:FindJobsComponent},
  {path: '',component:HomeComponent},
  {path: 'post-jobs',component:PostJobsComponent},
  {path:'Admin/posts',component: AdminPostsComponent},
  {path:'Admin/posts/add',component:AdminAddPostComponent},
  {path:'admin/posts/:id',component:AdminViewPostComponent},
  {path:'apply-job/:id',component:ApplyJobComponent},
  {path:'empnav-bar',component:EmpnavBarComponent},
  {path:'admin',component:AdminComponent},
  {path:'emp-login',component:EmpLoginComponent},
  {path:'emp-signin',component:EmpSigninComponent},
  {path:'admin-login',component:AdminLoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingcomponents = [NavBarComponent,LoginComponent,SignupComponent,ProfileDetailsComponent,FindJobsComponent,HomeComponent,PostJobsComponent,AdminPostsComponent,AdminViewPostComponent,AdminAddPostComponent,ApplyJobComponent,EmpnavBarComponent,AdminComponent,EmpLoginComponent,EmpSigninComponent,AdminLoginComponent]
