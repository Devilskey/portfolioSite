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

   constructor(private http: HttpClient, private snackBar: MatSnackBar){}
   
   SendToApi(){
    console.log(this.contactname);
    console.log(this.contactSubject);
    console.log(this.contactBody);

    this.snackBar.openFromComponent(MailSend, {
      duration: 1000,
    });
    this.http.post<any>("http://"+ SetupVar.api +":5244/SendContact", {name: this.contactname, Subject: this.contactSubject, Body: this.contactBody}).subscribe(() => {
      this.Succes = "Mail succesfully sended"
  })
  }
}
