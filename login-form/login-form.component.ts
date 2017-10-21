import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConnectionService} from '../connection.service'; 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:ConnectionService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    var userName = e.target.elements[0].value;
    var password =  e.target.elements[1].value;
    console.log(userName, password);

    if( userName == 'admin' && password == 'admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['connected-site-header']);

    }
  }

}
