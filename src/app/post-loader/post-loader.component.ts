import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../interfaces/Post';

@Component({
  selector: 'app-post-loader',
  templateUrl: './post-loader.component.html',
  styleUrls: ['./post-loader.component.css']
})
export class PostLoaderComponent implements OnInit{
  postId:number | null = 0;
  postTitle: string = "";
  postContent: string = "";

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient){
    this.postId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.http.post<any>('http://127.0.0.1:5244/PostMenu',{postId: this.postId}, {responseType: 'json'}).subscribe((data) => {
        this.postTitle = data[0].PostTitle;
        this.postContent = data[0].PostContent;

    })
  }

  ngOnInit(): void { 
  } 
}