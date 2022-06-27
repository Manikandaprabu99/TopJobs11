import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TopJobs';
  fauser = faUser;
}
