import { Component, Input } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input()  Linkid:any = "";
  @Input()  Title:any = "";
  @Input()  imgSrc:SafeUrl = ""
  PostLink:string = "";
  
  constructor(public domSanitizer: DomSanitizer) { 

  }
}