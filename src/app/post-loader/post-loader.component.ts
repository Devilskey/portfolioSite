import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetupVar } from '../Setup';
import { BehaviorSubject, Observable, timer } from 'rxjs';


@Component({
  selector: 'app-post-loader',
  templateUrl: './post-loader.component.html',
  styleUrls: ['./post-loader.component.css']
})
export class PostLoaderComponent implements OnInit{
  postId:number | null = 0;
  postTitle: string = "";
  postContent: string = "";
  IsEmpy: boolean = false;
  

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient){
    this.postId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.http.post<any>('http://' + SetupVar.api + ':5244/GetpostContent', { postId: this.postId }, { responseType: 'json' }).subscribe((data) => {
      if (data[0] == null) {
        this.IsEmpy = true;
      }
      this.postTitle = data[0].PostTitle;
      this.postContent = data[0].PostContent;

    },
      (error) => this.IsEmpy = true)
    
  }

  ngOnInit(): void { 
  }
}