import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { PostService } from './services/Post.service';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { CompanyReviewComponent } from './company-review/company-review.component';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { HomeComponent } from './home/home.component';
import { AdminViewPostComponent } from './Admin/admin-view-post/admin-view-post.component';
import { FormsModule } from '@angular/forms';
import { AdminAddPostComponent } from './Admin/admin-add-post/admin-add-post.component';





@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    ProfileDetailsComponent,
    FindJobsComponent,
    CompanyReviewComponent,
    PostJobsComponent,
    HomeComponent,
    AdminViewPostComponent,
    AdminAddPostComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
    
   

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
