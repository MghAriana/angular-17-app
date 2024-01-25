import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent , CommonModule , CommentsComponent],
  template:'<h1>hola desde {{ city.toUpperCase() }} </h1>',
  templateUrl: './app.component.html', 
   
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-app';
  city = 'Ciudad';
}
