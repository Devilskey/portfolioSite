import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MailSend } from '../snackbarComponent/SnackBarComp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SetupVar } from '../Setup';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
   contactname:string = "";
   contactSubject:string = "";
   contactBody:string = "";
   Succes:string = "";
   Api:string ="http://81.173.115.111:5244/Sendcontact";

   constructor(private http: HttpClient, private snackBar: MatSnackBar){

}
   
   SendToApi(){
    console.log(this.contactname);
    console.log(this.contactSubject);
    console.log(this.contactBody);

    this.http.post<any>(this.Api, {name: this.contactname, Subject: this.contactSubject, Body: this.contactBody}).subscribe(() => {
      this.Succes = "Mail succesfully sended"
      console.log(this.Api)
  })
  }
}
