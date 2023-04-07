import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { post } from '../interfaces/Post';
import { SetupVar } from '../Setup';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  posts: any;
  postAmount: number = 0;

  constructor(private http: HttpClient){
    http.get<any>("http://"+ SetupVar.api +":5244/PostMenuSite").subscribe((data:string) => {
      this.posts = data;
      this.postAmount = data.length;
    });
  }
}
