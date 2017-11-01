import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AddUserService } from './add-user.service';
import {Router} from '@angular/router';


@Injectable()
export class LogInService {
  public UserLoggedIn = false;
  constructor(private http:Http, private check:AddUserService, private router:Router) {
   }

  setUserLoggedIn(){
     this.UserLoggedIn = true;
   }

  getUserLoggedIn(){
     return this.UserLoggedIn;
   }

  logUser(form:any): any{
    //preparation before the submit
    let url = "http://localhost:8888/Users";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    //check if the user is already in the database
    this.check.checkExistance(JSON.parse(form).mail_adress).subscribe(res => {
      if (res.length==0){
        let s=document.getElementById("logIn_completion");
        s.innerHTML='<p style="color: red;">Votre identifiant( adresse email ) est incorrecte</p>';  
      } else {
        if (res[0].password == JSON.parse(form).password){
          this.setUserLoggedIn();
          let s=document.getElementById("logIn_completion");
          s.innerHTML='<p style="color: green;">Vous allez etre rediriger</p>';
          this.router.navigate(['connected-site-header']);
          
        }else{
          let s=document.getElementById("logIn_completion");
          s.innerHTML='<p style="color: red;">le mot de passe entré n\'est pas correcte</p>';
        }
               
      }
    });
  }



}
