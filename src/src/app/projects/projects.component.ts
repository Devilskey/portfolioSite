import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { post } from '../interfaces/Post';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  posts: any;
  postAmount: number = 0;

  constructor(private http: HttpClient){
    http.get<any>("http://212.227.171.244:5244/PostManager").subscribe((data:string) => {
      this.posts = data;
      this.postAmount = data.length;
    });
  }

}
