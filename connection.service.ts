import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {

  private UserLoggedIn;
  private user;

  constructor() {
    this.UserLoggedIn = false;
   }

   setUserLoggedIn(){
     this.UserLoggedIn = true;
   }

   getUserLoggedIn(){
     return this.UserLoggedIn;
   }
 

}
